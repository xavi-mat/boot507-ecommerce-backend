'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail extends Model {
    static associate(models) {
      Detail.belongsTo(models.Order);
      Detail.belongsTo(models.Product);
    }
  }
  Detail.init({
    OrderId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Detail',
  });
  return Detail;
};