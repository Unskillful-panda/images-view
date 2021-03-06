import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home'),
    },
    {
        path: '/upload',
        name: 'upload',
        component: () => import('../views/upload'),
    },
    {
        path: '/waterfall',
        name: 'waterfall',
        component: () => import('../views/waterfall'),
    }
]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router