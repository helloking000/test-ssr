const path = require('path')

const express = require('express')
const server = express()

const resolve = file => path.resolve(__dirname, file)
const serve = path => express.static(resolve(path))

// html 可以被生成，被直接返回。hmtl 所引用的  js 这种静态资源，怎么找到，其实还没有着落，这里 必须 被express 伺服才可以！
server.use('/distPublic', serve('./dist', true))

const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
    template: require('fs').readFileSync(path.resolve(__dirname, './index.template.html'), 'utf-8'),
    clientManifest,
})

server.get('*', (req, res) => {
    res.setHeader("Content-Type", "text/html")

    const context = {
        title: 'Hello king页面模板', // default title
        url: req.url,  // 这个必须有！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
        meta: `<meta charset="utf-8">`,  // 这也不能省略。。。。这玩意写得真实费劲啊
    }

    renderer.renderToString(context, (err, html) => {
        if (err) {
            console.log(err)
        }
        res.end(html)
    })
})

const port = process.env.PORT || 4000
server.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})