import { fileURLToPath, URL } from 'node:url'
// vite 默认不加载.env配置文件
import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from "unplugin-auto-import/vite"
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from "unplugin-vue-components/resolvers"
import Unocss from "unocss/vite"
import { presetIcons, presetAttributify, presetUno } from "unocss"
// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  // vite不自动导入env文件
  const env = loadEnv(mode, process.cwd(), "")
  console.log(env)

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
      // 配置unocss
      Unocss({
        // 使用unocss预设
        presets: [
          presetIcons(),
          presetAttributify(),
          presetUno(), //内置tailwind
        ],
        rules: [
          ["flex", { display: "flex" }],
          ["red", { color: "red" }],
          // 动态正则匹配
          // 匹配m-开头的类名  计算margin
          [
            /^m-(\d+)$/,
            ([, d]) => ({
              margin: `${Number(d) * 10}px`,
            }),
          ],
        ],
        // 组合样式
        shortcuts: {
          cike: ["flex", "red"],
        },
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
          additionalData: `@use "@/styles/element/index.scss" as *;`,
          // // @use "@/styles/common/vars.scss" as *;`,
          // additionalData: '@import "@/styles/common/vars.scss";',
        },
      },
    },
  }
})
