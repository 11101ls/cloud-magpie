import { fileURLToPath, URL } from 'node:url'
// vite 默认不加载.env配置文件
import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from "unplugin-auto-import/vite"
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/

export default defineConfig(({command,mode})=>{
  const env=loadEnv(mode,process.cwd(),'')
  console.log(env);
  
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver({ importStyle: "sass" })],
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass",
          }),
        ],
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@cmps": fileURLToPath(new URL("./src/components", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@/assets/styles/variables.scss";',
          additionalData: `@use "@/assets/styles/variables.scss";@use "@/assets/styles/element/index.scss" as *;`,
        },
      },
    },
  }
})
