import Vue from 'vue'
import Router from 'vue-router'
const barView = () => require('./components/Bar.vue')
const bazView = () => require('./components/Bar.vue')
const fooView = () => require('./components/Bar.vue')

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            { path: '/bar', component: barView },
            { path: '/baz', component: bazView },
            { path: '/foo', component: fooView },
        ]
    })
}