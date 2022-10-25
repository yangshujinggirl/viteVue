import { createApp } from 'vue'
import router from './router/index'
import './style.css'
import App from './App.vue';
import rem from './utils/rem';
import 'amfe-flexible/index';

// rem(100,1)
const app = createApp(App)
//整个应用支持路由。
app.use(router);
app.mount('#app')
