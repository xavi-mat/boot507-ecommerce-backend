const { Product } = require("../models/index.js");

const ProductController = {
  create(req, res) {
    Product.create({ ...req.body })

      .then((product) =>
        res
          .status(201)
          .send({ message: "Product was successfully created", product })
      )

      .catch((err) => {
        console.error(err);
        res.send({ message: "Some error has occurred" });
      });
  },

  updateProduct(req, res) {
    Product.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((product) =>
      res
        .status(201)
        .send({ message: "Product was successfully updated", product })
    );
  },

  deleteProdruct(req, res) {
    Product.destroy({
      where: {
        id: req.params.id,
      },
    }).then((product) =>
      res
        .status(201)
        .send({ message: "🚨🚨Product was DELETED!!🚨🚨", product })
    );
  },

  showProductsCategory(req, res) {
    Product.findAll().then((product) =>
      res.status(200).send({ message: "Search Category result:", product })
    );
  },

  productById(req, res) {
    Product.findAll({
      where: {
        id: req.params.id,
      },
    }).then((product) =>
      res.status(200).send({ message: "your Product shorted By ID:", product })
    );
  },

  productByName(req, res) {
    Product.findAll({
      where: { name: req.params.name },
    }).then((product) =>
      res.status(200).send({ message: "your Product given By Name:", product })
    );
  },

  productByPrice(req, res) {
    Product.findAll({
      where: { price: req.params.price },
    }).then((product) =>
      res.status(200).send({ message: "your Product given By Price:", product })
    );
  },

  productListPrice(req, res) {
    Product.findAll({
      order: [["price", "DESC"]],
    }).then((products) =>
      res
        .status(200)
        .send({ message: "your Product given By Price:", products })
    );
  },
};

module.exports = ProductController;
