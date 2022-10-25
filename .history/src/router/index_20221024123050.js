import { createRouter,createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";


const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
    routes,
    // history:createWebHistory()
    history:createWebHashHistory()
})

export default router