const { Review, User, Product } = require("../models/index.js");
const { Op } = require("sequelize");

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
      .then((result) => {
        res.send({ message: "Reviews by Product", result });
      })
      .catch((err) => {
        console.error(err);
        res.send({ message: "Some error has occurred", err });
      });
  },
  getByUser(req, res) {
    Review.findAll({ where: { UserId: req.params.id } })
      .then((result) => {
        res.send({ message: "Reviews by User", result });
      })
      .catch((err) => {
        console.error(err);
        res.send({ message: "Some error has occurred", err });
      });
  },

  getAllReviews(req, res) {
    Review.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        { model: Product, attributes: ["name"] },
      ],
    })
      .then((result) => {
        res.send({ message: "Reviews by User", result });
      })
      .catch((err) => {
        console.error(err);
        res.send({ message: "Some error has occurred", err });
      });
  },

  updateReview(req, res) {
    Product.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((result) =>
        res
          .status(201)
          .send({ message: "Review was successfully updated", result })
      )
      .catch((err) => {
        console.error(err);
        res.send({ message: "Some error has occurred", err });
      });
  },

  deleteReview(req, res) {
    Product.destroy({
      where: {
        [Op.and]: [{ id: req.params.id }, { UserId: req.user.id }],
      },
    })
      .then((result) =>
        res
          .status(200)
          .send({ message: "🚨🚨 Review was DELETED!!🚨🚨", result })
      )
      .catch((err) => {
        console.error(err);
        res.send({ message: "Some error has occurred", err });
      });
  },
};

module.exports = ReviewController;
