const languageModel = require('../models/language')

class languageController {

  /**
   * 通过Post请求的参数，插入一条信息
   *
   * @static
   * @param {*} ctx 必须包含zh_name,en_name,code
   * @memberof languageController
   */
  static async insert(ctx) {
    //获取request 对象
    let req = ctx.request.body;
    if (
      req.zh_name &&
      req.en_name &&
      req.code
    ) {
      try {
        const result = await languageModel.insert(req);
        const data = await languageModel.queryLanguageByID(result.id);

        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: 'insert language success',
          data
        }
      } catch (error) {
        ctx.response.status = 412;
        ctx.body = {
          code: 200,
          msg: 'insert language error',
          error
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 200,
        msg: 'please check the input data'
      }
    }
  }

  /**
   * 通过Get请求传递的id,查询相应的信息
   *
   * @static
   * @param {*} ctx
   * @memberof languageController
   */
  static async queryLanguageByID(ctx) {
    //获取请求的参数
    let id = ctx.params.id;
    if (id) {
      try {
        const data = await languageModel.queryLanguageByID(parseInt(id));
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: 'query success',
          data
        }
      } catch (error) {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: 'query fail',
          error
        }
      }
      

    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: 'the id is not allow null'
      }
    }
  }

  /**
   * 查询所有语言
   *
   * @static
   * @param {*} ctx
   * @memberof languageController
   */
  static async queryAll(ctx) {
    try {
      const data = await languageModel.queryAll();
      ctx.response.status = 200;
      ctx.body = {
        code: 200,
        msg: 'query success',
        data
      }
    } catch (error) {
      ctx.response.status = 412;
      ctx.body = {
        code: 412,
        msg: 'query fail',
        error
      }
    }
  }

  /**
   * update language by id
   * Post
   * @static
   * @param {*} ctx
   * @memberof languageController
   */
  static async updateByID(ctx) {
    let req = ctx.request.body;
    if (req.id && req.code) {
      try {
        const result = await languageModel.updateLanguageByID(req);
        const data = await languageModel.queryLanguageByID(req.id);

        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: 'update language success',
          result,
          data
        }
      } catch (error) {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: 'update language fail',
          error
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: 'the params is must have id and code'
      }
    }
  }

  /**
   * delete language by id
   * Post
   * @static
   * @param {*} ctx
   * @memberof languageController
   */
  static async deleteByID(ctx) {
    let req = ctx.request.body;
    if (req.id) {
      try {
        const result = await languageModel.deleteLanguageByID(parseInt(req.id));
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: 'delete language success',
          result
        }
      } catch (error) {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: 'delete language fail',
          error
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: 'the params is must have id'
      }
    }
  }
}

module.exports = languageController;