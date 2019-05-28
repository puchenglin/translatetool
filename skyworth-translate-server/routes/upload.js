const router = require('koa-router')()
const FileUploadController = require('../controllers/upload');

router.post('/uploadFile', FileUploadController.uploadFile);

module.exports = router;
