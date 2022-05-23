const { Order } = require("../models/index.js");

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

    }

};

module.exports = OrderController;
