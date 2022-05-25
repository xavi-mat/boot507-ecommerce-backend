"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsToMany(models.Product, {through: models.ProductCategory})
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Category name required",
          }
        }
      }
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
