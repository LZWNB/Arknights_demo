import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/Arknights_demo/',
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
    outDir: 'docs',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/\.(png|jpe?g|gif|svg|webp)$/i.test(assetInfo.name)) {
            return `[name].[hash][extname]`;
          }
          return `assets/[name].[hash][extname]`;
        }
      }
    }
  },
  resolve: {
    alias: {
      // 添加路径别名方便引用
    }
  }
})