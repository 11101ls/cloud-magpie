const learnsCssRoutes = [
  {
    name: "learns-articles",
    path: "/learns-articles",
    meta: {
      title: "articles",
    },
    component: () => import("@/views/learns/articles/Index.vue"),
  },
]
export default learnsCssRoutes
