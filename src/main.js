import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import less from 'less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store/index.js'
// import eventBus from 'vue3-eventbus'

const app = createApp(App)


// app.mount('#app')

// createApp(App).use(Router).mount('#app')


app.use(Router).use(store).use(ElementPlus).use(less)
// app.use(eventBus)
// app.use(ElementPlus)
app.mount('#app')

