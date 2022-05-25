const { User, Token, Sequelize } = require("../models");
const { Op } = Sequelize;
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, jwt_secret);
    const user = await User.findByPk(payload.id);
    const tokenFound = await Token.findOne({
      where: {
        [Op.and]: [{ UserId: user.id }, { token: token }],
      },
    });
    if (!tokenFound) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Token error", error });
  }
};

const isAdmin = async (req, res, next) => {
  if (!["admin"].includes(req.user.role)) {
    return res.status(403).send({ message: "Forbidden" });
  }
  next();
};
const isManager = async (req, res, next) => {
  if (!["manager", "admin"].includes(req.user.role)) {
    return res.status(403).send({ message: "Forbidden" });
  }
  next();
};

const isSeller = async (req, res, next) => {
  if (!["seller", "manager", "admin"].includes(req.user.role)) {
    return res.status(403).send({ message: "Forbidden" });
  }
  next();
};

const isPremium = async (req, res, next) => {
  if (!["premium"].includes(req.user.role)) {
    return res.status(403).send({ message: "Forbidden" });
  }
  next();
};

module.exports = { authentication, isAdmin, isManager, isSeller, isPremium };
