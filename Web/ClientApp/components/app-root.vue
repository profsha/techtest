<template>
    <div id="app" class="container-fluid">
        <div class="row">
            <div class="col-sm-3">
                <nav-menu params="route: route"></nav-menu>
            </div>
            <div class="col-sm-9">
                <transition name="slide">
                    <router-view></router-view>
                </transition>
            </div>
        </div>

    </div>

</template>

<script>
import Vue from 'vue'
import CounterExample from './counter-example'
import FetchData from './fetch-data'
import HomePage from './home-page'
import NavMenu from './nav-menu'
import {DateinputsInstaller} from '@progress/kendo-dateinputs-vue-wrapper'
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
//import { Window } from '@progress/kendo-window-vue-wrapper'
import { Window, WindowInstaller } from '@progress/kendo-window-vue-wrapper'

Vue.use(DateinputsInstaller);
Vue.use(GridInstaller);
Vue.use(WindowInstaller);

Vue.component('counter-example', CounterExample);
Vue.component('fetch-data', FetchData);
Vue.component('home-page', HomePage);
Vue.component('nav-menu', NavMenu);

export default {
    data() {
        return {
        }
    },
    components: {
        Grid,
        Window
    }
}
</script>

<style>
</style>
