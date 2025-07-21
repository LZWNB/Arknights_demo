import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styles from 'rollup-plugin-styles'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styles({
      // 设置为 true 以注入 CSS 到 JavaScript 中
      inject: true,
      // 设置为 true 以将 CSS 文件输出到单独的文件中
      // output: 'bundle.css',
      // 设置为 true 以启用 CSS Modules
      modules: false,
      // 设置为 true 以启用 PostCSS
      postcss: false,
      // 设置为 true 以启用 SASS/SCSS
      sass: true,
    }),
  ],
  css: {
    modules: {
      localsConvention: 'dashes'
    },
    preprocessorOptions: {
      scss: {
        // 你可以在这里添加SCSS全局变量或混合
      }
    }
  },
  base: '/',
  build: {
    outDir: 'docs'
  },
})
