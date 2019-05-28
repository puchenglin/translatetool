const translateModel = require('../models/translate')

class TranslateController {

  static async insert(ctx) {
    let req = cxt.request.body;
    if (req.osd && req.translate) {
      try {
        const result = translateModel.insert(req);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: 'insert success'
        }
      } catch (error) {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: 'insert fail'
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: 'params is not correct'
      }
    }
  }
}

module.exports = TranslateController;