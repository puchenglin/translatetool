const router = require('koa-router')()
const LanguageController = require('../controllers/language')

router.post('/insert', LanguageController.insert)

router.post('/delete', LanguageController.deleteByID)

router.post('/update', LanguageController.updateByID)

router.get('/select/:id', LanguageController.queryLanguageByID)

router.get('/all', LanguageController.queryAll)

module.exports = router;