const server = require('express')()
// const createApp = require('./dist/server-bundle.js')
const path = require('path')

const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')


// const renderer = require('vue-server-renderer').createRenderer(serverBundle, {
//     template: require('fs').readFileSync(path.resolve(__dirname, './index.template.html'), 'utf-8'),
//     clientManifest,
// })

const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
    template: require('fs').readFileSync(path.resolve(__dirname, './index.template.html'), 'utf-8'),
    clientManifest,
})

server.get('*', (req, res) => {
    res.setHeader("Content-Type", "text/html")

    const context = {
        title: 'Hello king页面模板', // default title
        url: req.url,
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