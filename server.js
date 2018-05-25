const server = require('express')()
const createApp = require('./dist/server-bundle.js')
const path = require('path')

const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync(path.resolve(__dirname, './index.template.html'), 'utf-8')
})

const context = {
    title: 'Hello king页面模板',
    meta: `<meta charset="utf-8">`,
}

server.get('*', (req, res) => {
    const reqInfo = {url: req.url}

    createApp.default(reqInfo).then(app => {
        renderer.renderToString(app, context, (err, html) => {
            res.end(html)
        })
    }).catch(err => {
        if (err) {
            if (err.code === 404) {
                res.status(404).end('老王，Page not found')
            } else {
                res.status(500).end('Internal Server Error')
            }
        }
    });
})

const port = process.env.PORT || 4000
server.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})