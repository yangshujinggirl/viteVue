import { createRouter,createWebHistory,RouteRecordRaw } from "vue-router";
// import Home from "../views/Home.vue";


const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes:RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router