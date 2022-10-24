import type { RouteRecordRaw } from "vue-router"

// 导入modules下的所有路由
const modules = import.meta.glob("./learnsChild/*.ts", {
  eager: true,
  import: "default",
})
const routeModuleList: Array<RouteRecordRaw> = []
Object.keys(modules).forEach((item) => {
  const mod = modules[item] || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})
const learnsRoutes = [
  {
    path: "/learns",
    name: "learns",
    meta: {
      title: "learns",
    },
    // redirect: "/resource/books", //路由重定向到

    children: [...routeModuleList],
  },
]
export default learnsRoutes
