import Vue from 'vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import App from 'components/app-root'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

sync(store, router)

//Vue.use(GridInstaller)

const app = new Vue({
    store,
    router,
    ...App
})

export {
    app,
    router,
    store
}
