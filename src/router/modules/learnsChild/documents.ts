const learnsCssRoutes = [
  {
    name: "learns-documents",
    path: "/learns-documents",
    meta: {
      title: "documents",
    },
    component: () => import("@/views/learns/documents/Index.vue"),
  },
]
export default learnsCssRoutes
