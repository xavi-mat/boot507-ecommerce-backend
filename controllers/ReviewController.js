const { Review, User, Product } = require("../models/index.js");
const { Op } = require("sequelize");

const ReviewController = {

  create(req, res, next) {
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
        err.origin = "Review 1";
        next(err);
      });
  },

  getByProduct(req, res, next) {
    Review.findAll({ where: { ProductId: req.params.id } })
      .then((result) => {
        res.send({ message: "Reviews by Product", result });
      })
      .catch((err) => {
        err.origin = "Review 2";
        next(err);
      });
  },

  getByUser(req, res, next) {
    Review.findAll({ where: { UserId: req.params.id } })
      .then((result) => {
        res.send({ message: "Reviews by User", result });
      })
      .catch((err) => {
        err.origin = "Review 3";
        next(err);
      });
  },

  getAllReviews(req, res, next) {
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
        err.origin = "Review 4";
        next(err);
      });
  },

  updateReview(req, res, next) {
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
        err.origin = "Review 5";
        next(err);
      });
  },

  deleteReview(req, res, next) {
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
        err.origin = "Review 6";
        next(err);
      });
  },
};

module.exports = ReviewController;
