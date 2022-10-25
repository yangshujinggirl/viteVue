import { createApp } from 'vue'
import router from './router/index'
import './style.css'
import App from './App.vue'
//整个应用支持路由。
createApp(App).use(router)
createApp(App).mount('#app')
