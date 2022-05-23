'use strict';

const { User, Order, Product, Token } = require("../models/index.js");
const { Op } = require("sequelize");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwt_secret} = require('../config/config.json')['development'];

const UserController = {
    create(req, res) {
        let valid = true
        if (!req.body.username || !req.body.firstName || !req.body.lastName || !req.body.password || !req.body.email) {
            valid = false
        }

        // TODO: Function "validateEmail"
        // if (!validateEmail(re.body.email)) {
        //   valid = false;
        // }

        if (!valid) {
            // TODO: Ask Sofía about the correct status to send on "invalid data"
            res.status(422)
                .send({ message: "Invalid data" });
            return;
        }

        req.body.role = "user";         // Assing role by default
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        req.body.active = true;

        User.create(req.body)
            .then((user) => {
                res.status(201).send({ message: "User was successfully created", user });
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
                password: req.body.password
            }
        })
            .then(result => {
                if (result) {
                    // TODO: Create a real JWT:
                    // (a real JWT contains 'id' and 'role' information)
                    const jwt = result.id + '.' + result.role;
                    res.send({ message: "Login successfull", jwt });
                } else {
                    res.send({ message: "Login failed" });
                }
            })
            .catch(err => {
                console.error(err);
                res.status(500).send({ message: "Internal error" });
            })
    },

    logout(req, res) {
        Token.destroy({
            where: {
                [Op.and]: [
                    { UserId: req.user.id },
                    { token: req.headers.authorization }
                ]
            }
        })
        .then(result=> {
            console.log(result);
            res.send({ message: 'Desconectado con éxito', result })

        })
        .catch(err=>{
            console.log(err);
            res.status(500).send({ message: 'hubo un problema al tratar de desconectarte' })
        })
    },

    async getUserWithOrders(req, res) {
        let valid = false;
        let id, role;
        // Check that user is Logged In
        if (req.body.jwt) {
            [id, role] = req.body.jwt.split('.');
            valid = true;
        }

        if (!valid || !id || !role) {
            res.status(401).send({ message: "Unauthorized" });
            return;
        }

        const allInfo = {};

        // User's info
        allInfo.user = await User.findOne({ where: { id: id }, attributes: { exclude: ['password'] } });
        // Orders info
        allInfo.orders = await Order.findAll({ where: { UserId: id }, include: Product });

        // Don't know how to use this:
        // https://sequelize.org/docs/v6/core-concepts/assocs/#special-methodsmixins-added-to-instances
        // allInfo.test = await User.getOrders();

        res.send(allInfo);
    }
};

module.exports = UserController;
