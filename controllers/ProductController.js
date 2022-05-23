const { Product } = require("../models/index.js");

const ProductController = {
  create(req, res) {
    Product.create({ ...req.body }, { ...req.file })

      .then((product) =>
        res
          .status(201)
          .send({ message: "Product was successfully created", product })
      )
      .catch((err) => {
        console.error(err);
        res.send({ message: "Some error has occurred", err });
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
    ).catch((err) => {
      console.error(err);
      res.send({ message: "Some error has occurred", err })
    });
  },

  deleteProduct(req, res) {
    Product.destroy({
      where: {
        id: req.params.id,
      },
    }).then((product) =>
      res
        .status(201)
        .send({ message: "🚨🚨Product was DELETED!!🚨🚨", product })
    ).catch((err) => {
      console.error(err);
      res.send({ message: "Some error has occurred", err })
    });
  },

  showProductsCategory(req, res) {
    Product.findAll().then((product) =>
      res
        .status(200)
        .send({ message: "Search All Product and Category result:", product })
    ).catch((err) => {
      console.error(err);
      res.send({ message: "Some error has occurred", err })
    });
  },

  productById(req, res) {
    Product.findAll({
      where: {
        id: req.params.id,
      },
    }).then((product) =>
      res.status(200).send({ message: "your Product shorted By ID:", product })
    ).catch((err) => {
      console.error(err);
      res.send({ message: "Some error has occurred", err })
    });
  },

  productByName(req, res) {
    Product.findAll({
      where: { name: req.params.name },
    }).then((product) =>
      res.status(200).send({ message: "your Product given By Name:", product })
    ).catch((err) => {
      console.error(err);
      res.send({ message: "Some error has occurred", err })
    });
  },

  productByPrice(req, res) {
    Product.findAll({
      where: { price: req.params.price },
    }).then((product) =>
      res.status(200).send({ message: "your Product given By Price:", product })
    ).catch((err) => {
      console.error(err);
      res.send({ message: "Some error has occurred", err })
    });
  },

  productListPrice(req, res) {
    Product.findAll({
      order: [["price", "DESC"]],
    }).then((products) =>
      res
        .status(200)
        .send({ message: "your Product given By Price:", products })
    ).catch((err) => {
      console.error(err);
      res.send({ message: "Some error has occurred", err })
    });
  },
};

module.exports = ProductController;
