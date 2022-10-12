const learnsRoutes = [
  {
    path: "/learns",
    name: "learns",
    meta: {
      title: "learns",
    },
    // redirect: "/resource/books", //路由重定向到

    children: [
      {
        name: "learns-css",
        path: "/learns-css",
        meta:{
          title:'css'
        },
        component: () =>
          import("@/views/learns/l-css/Index.vue"),
      },
    ],
  },
]
export default learnsRoutes
