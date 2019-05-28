const Sequelize = require('../lib/db')
const Language = Sequelize.import('../schemas/language')

//create table force=true 将先删除原来的表然后重新创建表
Language.sync({force: false})

class LanguageModel {
  /**
   * insert one data
   *
   * @static
   * @param {*} data 是一个对象，必须包含zh_name,en_name,code三个属性
   * @returns
   * @memberof LanguageModel
   */
  static async insert(data) {
    return await Language.create({
      zh_name: data.zh_name,
      en_name: data.en_name,
      code: data.code
    })
  }

  /**
   * query language detail by id
   *
   * @static
   * @param {*} id int
   * @returns
   * @memberof LanguageModel
   */
  static async queryLanguageByID(id) {
    return await Language.findOne({
      where: {
        id: id
      }
    })
  }

  /**
   * select all language
   *
   * @static
   * @returns
   * @memberof LanguageModel
   */
  static async queryAll() {
    return await Language.findAll();
  }

  /**
   * update language code by id
   * 
   * @static
   * @param {*} data {id:int,code,string}
   * @returns
   * @memberof LanguageModel
   */
  static async updateLanguageByID(data) {
    return await Language.update(
      { code: data.code },
      { where: { id: data.id } }
    )
  }

  /**
   * destory language by id
   * 
   * @static
   * @param {*} id int
   * @returns
   * @memberof LanguageModel
   */
  static async deleteLanguageByID(id) {
    return await Language.destroy({
      where: {
        id: id
      }
    })
  }
}

module.exports = LanguageModel;

