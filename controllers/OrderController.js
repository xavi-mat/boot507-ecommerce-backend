const { Order, Product, Detail } = require("../models/index.js");
const { Op } = require('sequelize');

const OrderController = {
    create(req, res, next) {
        const newOrder = {
            date: new Date(),
            status: 'open',
            UserId: req.user.id
        };
        Order.create({ ...newOrder })
            .then(result => {
                res.send({
                    message: "Order Created with number: " + result.id,
                    OrderId: result.id
                });
            })
            .catch((err) => {
                err.origin = "Order 1";
                next(err);
            });
    },

    // We are using here async/await to avoid too much nested '.then'
    async addProduct(req, res, next) {
        try {
            // Create new Detail
            const newDetail = {
                OrderId: req.body.OrderId,
                ProductId: req.body.ProductId,
                quantity: req.body.quantity
            }
            // Get price from DB
            const productInfo = await Product.findByPk(req.body.ProductId);
            if (!productInfo) {
                res.status(404).send({ message: "Product not found" })
            }
            newDetail.price = productInfo.price;

            // Check if User owns that Order
            const orderInfo = await Order.findOne({
                where:
                    { id: req.body.OrderId, UserId: req.user.id }
            });
            if (!orderInfo) {
                res.status(404).send({ message: "Order not found" })
            }

            const product = await Detail.create(newDetail);

            res.send({ message: "Product added in Order", product });

        } catch (error) {
            err.origin = "Order 2";
            next(err);
        }
    },

    getAll(req, res, next) {
        Order.findAll({
            where: {
                UserId: req.user.id
            },
            include: {
                model: Detail,
                attributes: ["id", "quantity", "price"],
                include: {
                    model: Product,
                    attributes: ["id", "name"]
                }
            }
        })
            .then(order => {
                res.send({ message: "Order", order })
            })
            .catch(err => {
                err.origin = "Order 3";
                next(err);
            })
    },

    getDetails(req, res, next) {
        Order.findAll({
            where: {
                id: req.params.id,
                UserId: req.user.id
            },
            include: {
                model: Detail,
                attributes: ["id", "quantity", "price"],
                include: {
                    model: Product,
                    attributes: ["id", "name"]
                }
            }
        })
            .then(order => {
                res.send({ message: "Order", order })
            })
            .catch(err => {
                err.origin = "Order 4";
                next(err);
            })
    },

    async updateProduct(req, res, next) {
        try {
            const updatedDetail = {
                OrderId: req.body.OrderId,
                ProductId: req.body.ProductId,
                quantity: req.body.quantity
            }

            // Check if user owns that Order
            const orderInfo = await Order.findOne({
                where: {
                    id: req.body.OrderId,
                    UserId: req.user.id
                }
            });
            if (!orderInfo) {
                res.status(404).send({ message: "Order not found" })
            }

            // Get last price from DB
            const productInfo = await Product.findByPk(req.body.ProductId);
            if (!productInfo) {
                res.status(404).send({ message: "Product not found" })
            }
            updatedDetail.price = productInfo.price;

            // Update the detail, if any
            const result = await Detail.set(
                updatedDetail,
                {
                    where: {
                        [Op.and]: [
                            { OrderId: req.body.OrderId },
                            { ProductId: req.body.ProductId }
                        ]
                    }
                });
            if (result) {
                res.send("Product updated in Order");
            } else {
                res.status(404).send("Unable to update product in Order");
            }
        } catch (error) {
            err.origin = "Order 5";
            next(err);
        }
    },

    async deleteProduct(req, res, next) {
        try {
            // Check if user owns that Order
            const orderInfo = await Order.findOne({
                where: {
                    id: req.body.OrderId,
                    UserId: req.user.id
                }
            });
            if (!orderInfo) {
                res.status(404).send({ message: "Order not found" })
            }

            // Get last price from DB
            const productInfo = await Product.findByPk(req.body.ProductId);
            if (!productInfo) {
                res.status(404).send({ message: "Order or product not found" })
            }
            updatedDetail.price = productInfo.price;

            // Update the detail, if any
            const result = await Detail.set(
                updatedDetail,
                {
                    where: {
                        [Op.and]: [
                            { OrderId: req.body.OrderId },
                            { ProductId: req.body.ProductId }
                        ]
                    }
                });
            if (result) {
                res.send("Product updated in Order");
            } else {
                res.status(404).send("Product not found in Order");
            }
        } catch (error) {
            err.origin = "Order 1";
            next(err);
        }
    },

};

module.exports = OrderController;
