"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User);
      Order.belongsToMany(models.Product, { through: models.Detail });
      Order.belongsToMany(models.User, { through: models.Review });
    }
  }
  Order.init(
    {
      date: DataTypes.DATE,
      status: DataTypes.ENUM("open", "paid", "sent", "delivered", "calcelled"),
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
