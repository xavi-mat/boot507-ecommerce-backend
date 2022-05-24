'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User);
      Order.hasMany(models.Detail);
    }
  }
  Order.init({
    date: DataTypes.DATE,
    status: DataTypes.ENUM("open", "paid", "sent", "delivered", "cancelled"),
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};