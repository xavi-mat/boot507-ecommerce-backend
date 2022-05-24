const { Order, Product, Detail } = require("../models/index.js");
const { Op } = require('sequelize');

const OrderController = {
    create(req, res) {
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
                console.error(err);
                res.send({ message: "Some error has occurred", err });
            });
    },

    // We are using here async/await to avoid too much nested '.then'
    async addProduct(req, res) {
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
            console.log(error);
            res.send({ message: "Some error", error });
        }
    },

    getAll(req, res) {
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
                console.log(err);
                res.status(500).send({ message: "Error", err });
            })
    },

    getDetails(req, res) {
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
                console.log(err);
                res.status(500).send({ message: "Error", err });
            })
    },

    async updateProduct(req, res) {
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
            console.error(error);
            res.send({ message: "Error", error });
        }
    },

    async deleteProduct(req, res) {
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
            console.error(error);
            res.send({ message: "Error", error });
        }
    },

};

module.exports = OrderController;
