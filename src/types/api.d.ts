// 响应信息
interface MyResponseData<T = any> {
  status: number
  message: string
  data: T
  success: boolean
}
/** 登录用户信息  */

/* 用户注册 */

interface UserRegisterInfo {
  username: string
  password: string
}
