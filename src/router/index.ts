import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"
// 导入modules下的所有路由
const modules = import.meta.glob("./modules/*.ts",{eager:true,import:'default'})
const routeModuleList: Array<RouteRecordRaw> = []
Object.keys(modules).forEach((item) => {
  const mod=modules[item] ||{}
  const modList=Array.isArray(mod)?[...mod]:[mod]
  routeModuleList.push(...modList)
})
console.log(routeModuleList)

const routes: Array<RouteRecordRaw> = [
  {
    path: "/index",
    meta: {
      // transition: "animate__zoomIn",
      title: "首页",
    },
    component: () => import("@/views/home/Index.vue"),
    // redirect: "/index", //路由重定向到
    alias: ["/"], //路由起别名
    // children: [
    //   // {
    //   //   alias: ["/home"], //路由起别名
    //   //   path: "/index",
    //   //   meta: {
    //   //     // transition: "animate__zoomIn",
    //   //     title: "首页",
    //   //   },
    //   //   // 视图类型  默认
    //   //   component: () => import("@/views/home/HomeView.vue"),
    //   // },
    // ],
  },
  ...routeModuleList,
  // {
  //   path: "/reg",
  //   name: "Regest",
  //   component: () => import("../components/Regest.vue"),
  // },
  // {
  //   path: "/index",
  //   name: "Index",
  //   meta: {
  //     transition: "animate__zoomIn",
  //   },
  //   component: () => import("@/components/HelloWorld.vue"),
  // },
]
console.log(routes);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
