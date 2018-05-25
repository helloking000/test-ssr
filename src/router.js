import Vue from 'vue'
import Router from 'vue-router'
// const barView = () => require('./components/Bar.vue')
// const bazView = () => require('./components/Baz.vue')
// const barView = require('./components/Bar.vue')
// const bazView = require('./components/Baz.vue')
// const fooView = require('./components/Foo.vue')

const barView = { template: '<div>bar</div>' }
const bazView = { template: '<div>baz</div>' }
const fooView = { template: '<div>foo</div>' }

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            { path: '/', component: {template: '<p>main入口</p>'} },
            { path: '/bar', component: barView },
            { path: '/baz', component: bazView },
            { path: '/foo', component: fooView },
        ]
    })
}