
 const resourceRoutes = [
   {
     path: "/resource",
     name: "resource",
     meta: {
       title: "resource",
       // index: 4,
     },
     redirect: "/resource/books", //路由重定向到
     // component: () => import("@/views/learns/demos/css/Index.vue"),
     children: [
       {
         name: "books",
         path: "/resource/books",
         meta: {
           title: "books",
         },
         component: () => import("@/views/resource/books/Index.vue"),
       },
       {
         name: "pics",
         path: "/resource/pics",
         meta: {
           title: "pics",
         },
         component: () => import("@/views/resource/pics/Index.vue"),
       },
     ],
   },
 ]
 export default resourceRoutes
