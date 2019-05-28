const Sequelize = require("../lib/db");
const Translate = Sequelize.import("../schemas/translate.js");

//create table force=true 将先删除原来的表然后重新创建表
Translate.sync({ force: false });

class TranslateModel {
  static async insert(data) {
    return await Translate.create({
      osd: data.osd,
      translate: data.translate,
      langID: data.langID
    });
  }

  static async selectByLangID(langID) {
    return await Translate.findAll({
      where: {
        langID: langID
      }
    });
  }
}

module.exports = TranslateModel;
