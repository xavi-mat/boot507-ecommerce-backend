"use strict";

const { User, Order, Detail, Product, Token } = require("../models/index.js");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];
const path = require("path");
const transporter = require("../config/nodemailer");

const UserController = {
  async create(req, res, next) {
    try {
      if (!req.body.password) {
        return res.status(400).send({ message: "Password required" });
      }

      req.body.role = "user"; // Assing role by default
      req.body.password = bcrypt.hashSync(req.body.password, 10);
      req.body.active = true;
      req.body.confirmed = false;

      const user = await User.create(req.body);
      const emailToken = jwt.sign({ email: req.body.email }, jwt_secret, {
        expiresIn: "48h",
      });
      const url = "http://localhost:8080/users/confirm/" + emailToken;
      await transporter.sendMail({
        to: req.body.email,
        subject: "Confirme su registro",
        html: `<h3>B🚨🚨ienvenido, estás a un paso de registrarte </h3>
          <a href="${url}"> Click para confirmar tu registro</a>
          Este enlace Caduca en 48 horas.`,
      });
      //🚨🚨🚨port 465 is currently closed🚨🚨🚨
      res.status(201).send({
        message: "Te hemos enviado un correo para confirmar el registro",
        user,
      });
    } catch (err) {
      err.origin = "User 1";
      next(err);
    }
  },

  async updateUser(req, res, next) {
    try {
      // Dont' allow to update 'role':
      req.body.role = req.user.role;

      // Hash password, if updated:
      if (req.body.password !== undefined) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
      }
      req.body.active = true;

      // If there is an avatar, get the filename
      if (req.file) {
        req.body.avatar = req.file.filename;
      }

      const result = await User.update(req.body, {
        where: { id: req.user.id },
      });

      if (result) {
        return res.send({ message: "User updated successfully" });
      } else {
        return res.send({ message: "Can't update user" });
      }
    } catch (error) {
      err.origin = "User Update";
      next(err);
    }
  },

  async login(req, res, next) {
    try {
      const user = await User.findOne({
        where: { email: req.body.email },
      });

      if (!user) {
        return res.status(400).send({ message: "Wrong credentials" });
      }

      const isMatch = await bcrypt.compare(req.body.password, user.password);

      if (!isMatch) {
        return res.status(400).send({ message: "Wrong credentials" });
      }

      if (!user.confirmed) {
        return res.send({ message: "Please, confirm your email" });
      }

      const token = jwt.sign({ id: user.id }, jwt_secret);

      await Token.create({ token, UserId: user.id });

      res.send({ message: "Wellcome " + user.username, token, user });
    } catch (error) {
      error.origin = "User Login";
      next(error);
    }
  },

  async confirm(req, res) {
    try {
      const token = req.params.emailToken;
      const payload = jwt.verify(token, jwt_secret);

      await User.update(
        { confirmed: true },
        { where: { email: payload.email } }
      );

      res.status(201).send("User confirmed");
    } catch (error) {
      error.origin = "User Confirm";
      next(error);
    }
  },

  async logout(req, res, next) {
    try {
      const result = await Token.destroy({
        where: {
          [Op.and]: [
            { UserId: req.user.id },
            { token: req.headers.authorization },
          ],
        },
      });

      if (result) {
        return res.send({ message: "Logout successful", result });
      } else {
        return res.send({ message: "Unable to logout", result });
      }
    } catch (error) {
      error.origin = "User Logout";
      next(error);
    }
  },

  async getUserWithOrders(req, res, next) {
    const allInfo = {};

    // User's info
    allInfo.user = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] },
      include: {
        model: Order,
        attributes: ["id", "date"],
        include: {
          model: Detail,
          attributes: ["id", "quantity", "price"],
          include: {
            model: Product,
            attributes: ["id", "name", "image"],
          },
        },
      },
    });
  },

  async getPublicUserInfo(req, res, next) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
          role: "user",
        },
        attributes: ["id", "username", "avatar"],
      });

      return res.send({ user });
    } catch (error) {
      error.origin = "User Public Info";
      next(error);
    }
  },

  async avatar(req, res, next) {
    try {
      const filepath = path.join(__dirname, "../avatars", req.params.avatar);

      res.sendFile(filepath, { headers: { "Content-Type": "image/jpeg" } });
    } catch (error) {
      error.origin = "User Avatar";
      next(error);
    }
  },
};

module.exports = UserController;
