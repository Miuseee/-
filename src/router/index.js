import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'LoginView',
        component: () => import('@/views/Login/LoginView.vue'),
        meta: {
            showHeader: false,
            requireAuth: false
        }
    },
    {
        path: '/home',
        name: 'MainView',
        component: () => import('@/views/Main/MainView.vue'),
        meta: {
            showHeader: true,
            requireAuth: true
        }
    },

]
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes
})
router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('token')
    if (to.name === 'LoginView') {
        localStorage.setItem('token', 'null')
    }
    if (to.meta.requireAuth === true) {
        if (to.name != 'LoginView' && token === 'null') {
            next({ name: 'LoginView' })
        } else {

            next()
        }
    }
    else {
        next()
    }

})

export default router

