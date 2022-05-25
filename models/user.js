"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Order);
      User.hasMany(models.Review);
      User.hasMany(models.Token);
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Username required (model)",
          },
        },
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        // allowNull: false,
        // validate: {
        //   notNull: {
        //     msg: "Email required (model)"
        //   },
        //   isEmail: {
        //     msg: "Invalid email (model)"
        //   }
        // }
      },
      password: DataTypes.STRING,
      role: DataTypes.ENUM("user", "premium", "seller", "manager", "admin"),
      birthDate: DataTypes.DATE,
      gender: DataTypes.ENUM("M", "F"),
      avatar: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      confirmed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
