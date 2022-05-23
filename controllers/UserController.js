"use strict";

const { User, Order, Detail, Product } = require("../models/index.js");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");

const UserController = {
  create(req, res) {
    let valid = true;
    if (
      !req.body.username ||
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.password ||
      !req.body.email
    ) {
      valid = false;
    }

    // TODO: Function "validateEmail"
    // if (!validateEmail(re.body.email)) {
    //   valid = false;
    // }

    // TODO: User data: more validations ?

    if (!valid) {
      // TODO: Ask Sofía about the correct status to send on "invalid data"
      res.status(422).send({ message: "Invalid data" });
      return;
    }

    req.body.role = "user"; // Assing role by default
    req.body.password += ".HASH"; // TODO: Hash password with bycript
    req.body.active = true;
    User.create({ ...req.body })
      .then((user) => {
        res
          .status(201)
          .send({ message: "User was successfully created", user });
      })
      .catch((err) => {
        console.error(err);
        res.status(422).send({ message: "Invalid data" });
        return;
      });
  },
  login(req, res) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        if (!user) {
          return res
            .status(400)
            .send({ message: "Usuario o contraseña incorrectos" });
        }

        const isMatch = bcrypt.compareSync(req.body.password, user.password);

        if (!isMatch) {
          return res
            .status(400)
            .send({ message: "Usuario o contraseña incorrectos" });
        }

        res.send(user);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({ message: "Internal error" });
      });
  },

  logout(req, res) {
    res.send({ message: "Logout", jwt: null });
  },

  async getUserWithOrders(req, res) {
    let valid = false;
    let id, role;
    // Check that user is Logged In
    if (req.body.jwt) {
      [id, role] = req.body.jwt.split(".");
      valid = true;
    }

    if (!valid || !id || !role) {
      res.status(401).send({ message: "Unauthorized" });
      return;
    }

    const allInfo = {};

    // User's info
    allInfo.user = await User.findOne({
      where: { id: id },
      attributes: { exclude: ["password"] },
    });
    // Orders info
    allInfo.orders = await Order.findAll({
      where: { UserId: id },
      include: Product,
    });

    // Don't know how to use this:
    // https://sequelize.org/docs/v6/core-concepts/assocs/#special-methodsmixins-added-to-instances
    // allInfo.test = await User.getOrders();

    res.send(allInfo);
  },
};

module.exports = UserController;
