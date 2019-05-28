const router = require('koa-router')()
const language_router = require('./language')
const translate_router = require('./translate')
const upload_router = require('./upload')

router.prefix('/api')

router.use('/language', language_router.routes(), language_router.allowedMethods())

router.use('/translate', translate_router.routes(), translate_router.allowedMethods())

router.use('/upload', upload_router.routes(), upload_router.allowedMethods())

module.exports = router;
