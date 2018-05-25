import Vue from 'vue'
import Router from 'vue-router'
// const barView = () => require('./components/Bar.vue')
// const bazView = () => require('./components/Baz.vue')
// const barView = require('./components/Bar.vue')
// const bazView = require('./components/Baz.vue')

import fooView from './components/Foo.vue'  // 这个可以
// const fooView = require('./components/Foo.vue') // 这个不可以，貌似不支持异步加载


// 为什么 这个不行！！！？？？
// const barView = { template: '<div>bar</div>' }
// const bazView = { template: '<div>baz</div>' }
// const fooView = { template: '<div>foo</div>' }

const barView = { render: h => h('div', 'bar') }
const bazView = { render: h => h('div', 'baz') }
// const fooView = { render: h => h('div', 'foo') }

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            { path: '/', component: {template: '<p>main入口</p>'} }, // 必须设置这个目录吗？
            { path: '/bar', component: barView },
            { path: '/baz', component: bazView },
            { path: '/foo', component: fooView },
        ]
    })
}