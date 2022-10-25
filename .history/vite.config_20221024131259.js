import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import addPostcssPlugins from 'postcss-px2rem';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  postcss: {
    plugins: [
      require('postcss-px2rem')({ remUnit: 37.5 }), // 换算的基数
    ]
  }
})
