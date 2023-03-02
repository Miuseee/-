import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/login',
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
    {
        path: '/register',
        name: 'RegisterView',
        component: () => import('@/views/Register/RegisterView.vue'),
        meta: {
            showHeader: false,
            requireAuth: false
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
    // var objectToken = JSON.parse(token)
    // let newtoken = eval("(" + token + ")");
    console.log(token);
    // Object(token)
    console.log(typeof (token));
    if (to.meta.requireAuth === true) {
        if (to.name != 'LoginView' && token === 'null') {
            next({ name: 'LoginView' })
            // router.push('/login')
        } else next()
    }
    else {
        next()
    }

})

export default router

