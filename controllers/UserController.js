"use strict";

const { User, Order, Detail, Product, Token } = require("../models/index.js");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];
const path = require("path");
const transporter = require("../config/nodemailer");

const UserController = {
  async create(req, res) {
    try {
      let valid = true;
      // if (
      //     !req.body.username ||
      //     !req.body.firstName ||
      //     !req.body.lastName ||
      //     !req.body.password ||
      //     !req.body.email
      // ) {
      //     valid = false;
      // }

      // TODO: Function "validateEmail"
      // if (!validateEmail(re.body.email)) {
      //   valid = false;
      // }

      if (!valid) {
        res.status(400).send({ message: "Invalid data" });
        return;
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

        html: `<h3>Bienvenido, estás a un paso de registrarte </h3>

<a href="${url}"> Click para confirmar tu registro</a> Este enlace Caduca en 48 horas.

`,
      });
      res.status(201).send({
        message: "Te hemos enviado un correo para confirmar el registro",

        user,
      });
      res.status(201).send({
        message: "Te hemos enviado un correo para confirmar el registro",

        user,
      });
    } catch (err) {
      err.origin = "User";

      next(err);
    }
  },

  async confirm(req, res) {
    try {
      const token = req.params.emailToken;
      const payload = jwt.verify(token, jwt_secret);

      await User.update(
        { confirmed: true },
        {
          where: {
            email: payload.email,
          },
        }
      );

      res.status(201).send("Usuario confirmado con éxito");
    } catch (error) {
      console.error(error);
    }
  },

  logout(req, res) {
    Token.destroy({
      where: {
        [Op.and]: [
          { UserId: req.user.id },
          { token: req.headers.authorization },
        ],
      },
    })
      .then((result) => {
        console.log(result);
        res.send({ message: "Desconectado con éxito", result });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({ message: "hubo un problema al tratar de desconectarte" });
      });
  },

  async getUserWithOrders(req, res) {
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

    res.send(allInfo);
  },

  //   login(req, res) {
  //     User.findOne({
  //       where: {
  //         email: req.body.email,
  //       },
  //     })
  //       .then((user) => {
  //         if (!user) {
  //           return res
  //             .status(400)
  //             .send({ message: "Usuario o contraseña incorrectos" });
  //         }

  //         const isMatch = bcrypt.compareSync(req.body.password, user.password);

  //         if (!isMatch) {
  //           return res
  //             .status(400)
  //             .send({ message: "Usuario o contraseña incorrectos" });
  //         }
  //         const token = jwt.sign({ id: user.id }, jwt_secret);
  //         Token.create({ token, UserId: user.id }).catch((err) => {
  //           console.error(err);
  //         });
  //         res.send({ message: "Wellcome " + user.username, token, user });
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         res.status(500).send({ message: "Internal error" });
  //       });
  //   },

  login(req, res) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (!user) {
        return res
          .status(400)
          .send({ message: "Usuario o contraseña incorrectos" });
      }
      if (!user.confirmed) {
        return res.status(400).send({ message: "Debes confirmar tu correo" });
      }
    });
  },

  async updateUser(req, res) {
    try {
      // VALIDATIONS
      let valid = true;
      valid = valid && req.body.username !== "";
      valid = valid && req.body.firstName !== "";
      valid = valid && req.body.lastName !== "";
      valid = valid && req.body.email !== "";

      // TODO: Function "validateEmail"
      // if (!validateEmail(re.body.email)) {
      //   valid = false;
      // }

      if (!valid) {
        return res.status(400).send({ message: "Invalid data" });
      }

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

      // console.log("req.user", req.user);
      console.log("req.body", req.body);
      const result = await User.update(req.body, {
        where: { id: req.user.id },
      });

      if (result) {
        return res.send({ message: "User updated successfully" });
      } else {
        return res.send({ message: "Can't update user" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: "Server error", error });
    }
  },

  avatar(req, res) {
    const filepath = path.join(__dirname, "../avatars", req.params.avatar);
    res.sendFile(filepath, { headers: { "Content-Type": "image/jpeg" } });
  },

  getPublicUserInfo(req, res) {
    User.findOne({
      where: {
        id: req.params.id,
        role: "user",
      },
      attributes: ["id", "username", "avatar"],
    })
      .then((user) => {
        res.send({ user });
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send({ message: "Error" });
      });
  },
};

module.exports = UserController;
