const { Review } = require("../models/index.js");

const ReviewController = {
    create(req, res) {
        const newReview = {
            UserId: req.user.id,
            ProductId: req.body.ProductId,
            content: req.body.content,
            stars: req.body.stars,
            active: true,
        };
        Review.create(newReview)
            .then((review) =>
                res.status(201).send({ message: "Review successfully Posted", review })
            )
            .catch((err) => {
                console.error(err);
                res.send({ message: "Some error has occurred", err });
            });
    },
    getByProduct(req, res) {
        Review.findAll({ where: { ProductId: req.params.id } })
            .then(result=>{
                res.send({message:"Reviews by Product", result})
            })
            .catch((err) => {
                console.error(err);
                res.send({ message: "Some error has occurred", err });
            });
    },
    getByUser(req, res) {
        Review.findAll({ where: { UserId: req.params.id } })
            .then(result=>{
                res.send({message:"Reviews by User", result})
            })
            .catch((err) => {
                console.error(err);
                res.send({ message: "Some error has occurred", err });
            });
    },
};

module.exports = ReviewController;
