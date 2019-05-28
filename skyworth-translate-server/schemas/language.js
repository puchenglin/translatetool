/**
 * Define languages table
 * id: 主键，自增， int，不为空
 * zh_name: 中文名： string, 不为空
 * en_name: 英文名：string, 不为空
 * code: 语言的代码：string, 不为空
 */
const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "languages",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },

      zh_name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "zh_name"
      },

      en_name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "en_name"
      },

      code: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "code"
      },
      
      //创建时间
      createdAt: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue("createdAt")).format(
            "YYYY-MM-DD HH:mm:ss"
          );
        }
      },

      //更新时间
      updatedAt: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue("updatedAt")).format(
            "YYYY-MM-DD HH:mm:ss"
          );
        }
      }
    },
    {
      // 如果为 true 则表的名称和 model 相同，即 language
      // 为 false MySQL创建的表名称会是复数 languages
      // 如果指定的表名称本就是复数形式则不变
      freezeTableName: true
    }
  );
};
