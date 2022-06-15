import { createApp } from 'vue'
import VueRouter from 'vue-router'
import routes from './router/routes'
import App from './App.vue'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')
