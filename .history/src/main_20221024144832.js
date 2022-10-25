import { createApp } from 'vue'
import router from './router/index'
import './style.css'
import App from './App.vue';
import 'amfe-flexible';//
import Vant from 'vant';//全局引入
import 'vant/lib/index.css';

// Vue.use(Vant);
// rem(100,1)
const app = createApp(App)
//整个应用支持路由。
app.use(router);
app.use(Vant);
app.mount('#app')
