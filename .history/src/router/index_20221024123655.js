import { createRouter,createWebHistory, createWebHashHistory } from "vue-router";
import Home from "./Home.vue";


const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
    routes,
    // history:createWebHistory()
    history:createWebHistory()
})

export default router