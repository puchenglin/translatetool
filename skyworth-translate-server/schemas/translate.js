/**
 * Define translates table
 * id: 主键，自增
 * osd：需翻译的短语
 * translate: 译文
 * langID: 外键，对应译文语言的简称
 */
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "translates",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },

      osd: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "osd"
      },

      translate: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "translate"
      },

      langID: {
        type: DataTypes.INTEGER,
        references: {
          model: "languages",
          key: "id"
        }
      }
    },
    {
      // 如果为 true 则表的名称和 model 相同，即 language
      // 为 false MySQL创建的表名称会是复数 languages
      // 如果指定的表名称本就是复数形式则不变
      freezeTableName: true,

      //不添加时间戳updateAt,createdAt
      timestamps: false
    }
  );
};
