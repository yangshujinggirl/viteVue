import { createApp } from 'vue'
import router from './router/index'
import './style.css'
import App from './App.vue';

const app = createApp(App)
//整个应用支持路由。
app.use(router);
app.mount('#app')
