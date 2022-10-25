import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import px2rem from 'postcss-plugin-px2rem';
import addPostcssPlugins from 'postcss-px2rem';
import px2remOpts from './ postcss.config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // css:{
  //   postcss:{
  //     plugins:[
  //       addPostcssPlugins({
  //           remUnit: 37.5
  //         })
  //     ]
  //   }
  // }
  css:{
    postcss:{
      plugins:[postcss: [px2rem(px2remOpts)]]
    }
  }
})
