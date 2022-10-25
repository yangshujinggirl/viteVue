import { createRouter,createWebHistory, createWebHashHistory } from "vue-router";
import Home from "../Home.vue";
import About from "../About.vue";
import Step2 from "../Step2.vue";
import Step3 from "../Step3.vue";
import Step4 from "../Step4.vue";


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/step2', component: Step2 },
  { path: '/step3', component: Step3 },
  { path: '/step4', component: Step4 },
]

const router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router