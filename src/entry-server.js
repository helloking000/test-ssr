import { createApp } from './app'

export default context => {
    // 1) 最简单版本
    // const { app } = createApp()
    // return app

    // 这里设置了一个流程，在服务器端渲染时，首先获取 传来的 url 信息，根据对应url 找到 vue 实例的构造函数（类）（注意，不是vue实例！！），渲染的具体工作要交给server.js
    return new Promise((resolve, reject) => {
        const { app, router } = createApp();

        router.push(context.url)

        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()

            if (!matchedComponents.length) {
                return reject({code: 404})
            }

            resolve(app)
        }, reject) // 如果 router 解析组件失败，则向promise 后面抛出错误
    })
}