import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import px2rem from 'postcss-plugin-px2rem';
import addPostcssPlugins from 'postcss-px2rem';
// import px2remOpts from './ postcss.config';
const px2remOpts = {
  rootValue:37.5,
  // rootValue: 37.5, // 设计稿宽度除以 10，  开头大写的Px 不转换 => height: 100Px, 内联样式不转换，需要 / 75 转成 rem
  unitPrecision: 6, // 计算结果保留 6 位小数
  selectorBlackList: ['.no-rem', 'no-rem'], // 要忽略的选择器并保留为px。
  propList: ['*'], // 可以从px更改为rem的属性  感叹号开头的不转换
  replace: true, // 转换成 rem 以后，不保留原来的 px 单位属性
  mediaQuery: true, // 允许在媒体查询中转换px。
  minPixelValue: 2, // 设置要替换的最小像素值。
  exclude: /node_modules/i // 排除 node_modules 文件(node_modules 内文件禁止转换)
}
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
      plugins:[px2rem(px2remOpts)]
    }
  }
})
