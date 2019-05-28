const router = require('koa-router')()
const translateController = require('../controllers/translate')

router.post('/insert', translateController.insert)

module.exports = router;