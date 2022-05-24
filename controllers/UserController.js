"use strict";

const { User, Order, Product, Token } = require("../models/index.js");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];

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

        if (!valid) {
            res.status(400).send({ message: "Invalid data" });
            return;
        }

        req.body.role = "user"; // Assing role by default
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        req.body.active = true;

        User.create(req.body)
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
                const token = jwt.sign({ id: user.id }, jwt_secret);
                Token.create({ token, UserId: user.id }).catch((err) => {
                    console.error(err);
                });
                res.send({ message: "Wellcome " + user.username, user, token });
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send({ message: "Internal error" });
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
            const result = await User.update(
                req.body,
                { where: {id: req.user.id}}
                );

            if (result) {
                return res.send({ message: "User updated successfully" });
            } else {
                return res.send({ message: "Can't update user" });
            }

        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Server error", error });
        }

    }
};

module.exports = UserController;
