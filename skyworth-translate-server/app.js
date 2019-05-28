const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const body = require('koa-body')
const logger = require('koa-logger')
const cors = require('koa-cors')
const path = require('path')
const fs = require('fs')

const index = require('./routes/index')
// error handler
onerror(app)

// middlewares
app.use(body({
  jsonLimit: '5mb',
  formLimit: '5mb',
  textLimit: '5mb',
  multipart: true,
  formidable: {
    multipart: false,
    uploadDir: path.join(__dirname, 'public/upload/'),
    keepExtensions: true,
    onFileBegin: (name, file) => {
      const filePath = path.join(__dirname, 'public/upload/')
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath)
      }
      file.path = `${filePath}/${file.name}`;
    }
  }
}))
app.use(json())
app.use(logger())
app.use(cors())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
