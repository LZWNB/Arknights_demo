import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/',
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'dashes',
      // 添加生成类名的配置
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    },
    preprocessorOptions: {
      scss: {
        // 添加全局 Sass 文件导入
      }
    }
  },
  build: {
    outDir: 'docs'
  },
  resolve: {
    alias: {
      // 添加路径别名方便引用
    }
  }
})