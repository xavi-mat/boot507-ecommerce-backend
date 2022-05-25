'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.User);
      Review.belongsTo(models.Product);
    }
  }
  Review.init({
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    stars: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: "Stars must be integer"
        },
        min: {
          args: 1,
          msg: "Stars must be between 1 and 5"
        },
        max: {
          args: 5,
          msg: "Stars must be between 1 and 5"
        }
      }
    },
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};