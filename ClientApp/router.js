import Vue from 'vue'
import VueRouter from 'vue-router'

import { routes } from './routes'

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    base: window.VueRouterUrl,
    routes
})

export default router
