import BrawlerList from "./components/BrawlerList.vue"
import Brawler from "./components/Brawler.vue"
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: BrawlerList },
    { path: '/brawler/:id', component: Brawler },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
