'use strict';

const { User, Order, Detail, Product } = require("../models/index.js");
const { Op } = require("sequelize");

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

        // TODO: User data: more validations ?

        if (!valid) {
            // TODO: Ask Sofía about the correct status to send on "invalid data"
            res.status(422)
                .send({ message: "Invalid data" });
            return;
        }

        req.body.role = "user";         // Assing role by default
        req.body.password += ".HASH"    // TODO: Hash password with bycript
        req.body.active = true;
        User.create({ ...req.body })
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
        req.body.password += ".HASH"  // TODO: Hash password with bycript
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
                res.status(500).send({message: "Internal error"});
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
        allInfo.orders = await Order.findAll({ where: { UserId: id } });

        // Details info
        const allOrdersIds = allInfo.orders.map(order=>order.id);
        allInfo.details = await Detail.findAll({ where: { OrderId: {[Op.in]: allOrdersIds}} });

        // Products info
        const allProductsId = allInfo.details.map(detail=>detail.ProductId);
        allInfo.products = await Product.findAll({ where: { id: {[Op.in]: allProductsId}}});

        // ATTEMPT 1. Not working
        // allInfo.orders.forEach(order => {
        //   order.details = Detail.findAll({where:{OrderId:order.id}});
        // });

        // ATTEMPT 2. Not working
        // allInfo.orders = await allInfo.orders.map(async function(order) {
        //     order.details = await Detail.findAll({where:{OrderId:order.id}});
        //     return order;
        // });

        res.send(allInfo);
    }
};

module.exports = UserController;
