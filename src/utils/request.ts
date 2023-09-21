import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { showMessage } from "./http-status"
import { ElMessage, ElLoading } from "element-plus"

const service = axios.create({
  // baseURL: import.meta.env.VITE_APP_DEV_URL,
  baseURL: "/api",
  headers: { "Content-Type": "application/json;charset=UTF-8" },
  timeout: 60000,
})

// 请求等待
let loading: any
let requestCount = 0
const showLoading = () => {
  if (requestCount === 0 && !loading) {
    loading = ElLoading.service({
      text: "加载中。。。",
      background: "rgba(0, 0, 0, 0.7)",
      spinner: "el-icon-loading",
    })
  }
}
const hideLoading = () => {
  requestCount--
  if (requestCount === 0) {
    loading.close()
  }
}

// 请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    showLoading()
    //是否需要设置 token放在请求头
    let token = localStorage.getItem("user")
    console.log(token, "-------token")

    if (token) {
      config.headers!["Authorization"] = `Bearer ${token}` // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    if (config.method === "get" && config.params) {
      let url: string = config.url!
      for (const name of Object.keys(config.params)) {
        const value = config.params[name]
        var part = encodeURIComponent(name) + "="
        // 对象处理
        if (typeof value === "object") {
          for (const key of Object.keys(value)) {
            let params = `${name}[${key}]`
            var subPart = encodeURIComponent(params) + "="
            url += subPart + encodeURIComponent(value[key]) + "&"
          }
        } else {
          url += part + encodeURIComponent(value) + "&"
        }
      }
      // url = url.slice(0, -1)
      console.log(url, "-------------")

      config.params = {}
      config.url = url
    }
    return config
  },
  (err: Error) => {
    return Promise.reject(err)
  }
)
// 响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    hideLoading()
    const { data } = response
    const status: number = data["status"] || 200
    const msg: string = showMessage(status) || data["message"]
    if ([200, 201].includes(status)) {
      return response.data
    } else {
      ElMessage.error(msg)
      return Promise.reject(response.data)
    }
  },
  (error) => {
    console.log("err" + error)
    hideLoading()
    let { message } = error
    if (message == "Network Error") {
      message = "后端接口连接异常"
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时"
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常"
    }
    ElMessage.error({
      message: message,
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  }
)

export default service
