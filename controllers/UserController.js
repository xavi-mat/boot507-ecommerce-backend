"use strict";

const { User, Order, Detail, Product, Token } = require("../models/index.js");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];
const path = require("path");

const UserController = {
    create(req, res, next) {

        if (!req.body.password) {
            return res.status(400).send({ message: "Password required" });
        }

        req.body.role = "user";  // Assing role by default
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        req.body.active = true;

        User.create(req.body)
            .then((user) => {
                res
                    .status(201)
                    .send({ message: "User was successfully created", user });
            })
            .catch((err) => {
                err.origin = "User 1";
                next(err);
            });
    },

    logout(req, res, next) {
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
                err.origin = "User 2";
                next(err);
            });
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
                        attributes: ["id", "name", "image"]
                    }
                }
            }
        });

        res.send(allInfo);
    },

    login(req, res, next) {
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
                Token.create({ token, UserId: user.id })
                    .catch((err) => {
                        err.origin = "User 3";
                        next(err);
                    });
                res.send({ message: "Wellcome " + user.username, token, user });
            })
            .catch((err) => {
                err.origin = "User 4";
                next(err);
            });
    },

    async updateUser(req, res, next) {

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
                { where: { id: req.user.id } }
            );

            if (result) {
                return res.send({ message: "User updated successfully" });
            } else {
                return res.send({ message: "Can't update user" });
            }

        } catch (error) {
            err.origin = "User 5";
            next(err);
        }

    },

    avatar(req, res, next) {
        const filepath = path.join(__dirname, '../avatars', req.params.avatar);
        res.sendFile(filepath, { headers: { "Content-Type": "image/jpeg" } });
    },

    getPublicUserInfo(req, res, next) {
        User.findOne({
            where: {
                id: req.params.id,
                role: "user"
            },
            attributes: ["id", "username", "avatar"]
        })
            .then(user => {
                res.send({ user })
            })
            .catch(error => {
                err.origin = "User 6";
                next(err);
            })
    }
};

module.exports = UserController;
