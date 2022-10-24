import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import NProgress from "nprogress"
// loading
import Loading from "@/components/loading/Index.vue"
import "./styles/main.scss"

import "uno.css"

const app = createApp(App)
NProgress.configure({
  showSpinner: false, //
  minimum: 0.3,
  // trickleRate: 1,
  trickleSpeed: 800,
  speed: 500,
})
//  注册全局Loading
app.component("Loading", Loading)
app.use(createPinia())
app.use(router)

app.mount('#app')
