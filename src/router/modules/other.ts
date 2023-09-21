const othersRoutes = [
  {
    path: "/others",
    name: "others",
    meta: {
      title: "others",
      // index: 4,
    },
    // redirect: "/resource/books", //路由重定向到
    component: () => import("@/views/others/Index.vue"),
    // children: [
    //   {
    //     name: "books",
    //     path: "/resource/books",
    //     component: () => import("@/views/resource/books/Index.vue"),
    //   },
    //   {
    //     name: "pics",
    //     path: "/resource/pics",
    //     component: () => import("@/views/resource/pics/Index.vue"),
    //   },
    // ],
  },
]
export default othersRoutes
