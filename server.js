const server = require('express')()
const createApp = require('/dist/server-bundle.js')
const path = require('path')

const renderer = require('vue-server-renderer').createBundleRenderer('/dist/vue-ssr-server-bundle.json', {
    template: require('fs').readFileSync(path.resolve(__dirname, './index.template.html'), 'utf-8')
})

const context = {
    title: 'Hello king页面模板',
    meta: `<meta charset="utf-8">`,
}

server.get('*', (req, res) => {
    const context = {url: req.url}

    createApp(context).then(app => {
        renderer.renderToString(app, context, (err, html) => {
            if (err) {
                if (err.code === 404) {
                    res.status(404).end('Page not found')
                } else {
                    res.status(500).end('Internal Server Error')
                }
            } else {
                res.end(html)
            }
        })
    })
})