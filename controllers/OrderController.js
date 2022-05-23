const { Order, Product, Detail } = require("../models/index.js");

const OrderController = {
    create(req, res) {
        const newOrder = { date: new Date(), status: 'open', UserId: req.body.UserId };
        Order.create({ ...newOrder })
            .then(result => {
                res.send({message: "Order Created with number: ", id:result.id});
            })
            .catch((err) => {
                console.error(err);
                res.send({ message: "Some error has occurred", err });
            });
    },

    // We are using here async/await to avoid too much nested '.then'
    async addProduct(req, res) {
        // Create new Detail
        const newDetail = {
            OrderId: req.body.OrderId,
            ProductId: req.body.ProductId,
            quantity: req.body.quantity
        }
        try {
            // Get price from DB
            const productInfo = await Product.findByPk(req.body.ProductId);
            const orderInfo = await Order.findOne({
                where:
                    {id: req.body.OrderId, UserId: req.body.UserId}
                });
            if (!productInfo || !orderInfo) {
                res.status(404).send({message: "Order or product not found"})
            }
            newDetail.price = productInfo.price;

            const result = await Detail.create(newDetail);

            res.send(result);

        } catch (error) {
            console.log(error);
            res.send({message: "Some error", error});
        }
    },

    getAll(req, res) {
        Order.findAll({
            where: {
                id: req.params.id,
                UserId: req.body.UserId
            },
            include: Product
        })
            .then(order=>{
                res.send({message: "Order", order})
            })
            .catch(err=>{
                console.log(err);
                res.status(500).send({message: "Error", err});
            })
    }

};

module.exports = OrderController;
