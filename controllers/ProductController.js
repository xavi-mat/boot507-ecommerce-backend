const { Product, Category } = require("../models/index.js");

const ProductController = {
  create(req, res) {
    let valid = true;
    if (!req.body.name) {
      valid = false;
    }
    if (!valid) {
      res.status(418).send({
        message: "maybe u have to Put a name in the Product...Pythagoras",
      });
      return;
    }

    // If there is an image, save the filename
    if (req.file) {
      req.body.image = req.file.filename;
    }

    Product.create(req.body)
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
    let valid = true;
    if (!req.body.name) {
      valid = false;
    }
    if (!valid) {
      res
        .status(400)
        .send({ message: "Insert the name of the product u want to update" });
    }

    Product.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((product) =>
        res
          .status(201)
          .send({ message: "Product was successfully updated", product })
      )
      .catch((err) => {
        console.error(err);
        res.send({ message: "Some error has occurred", err });
      });
  },

  deleteProduct(req, res) {
    Product.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((product) =>
        res
          .status(200)
          .send({ message: "🚨🚨Product was DELETED!!🚨🚨", product })
      )
      .catch((err) => {
        console.error(err);
        res.send({ message: "Some error has occurred", err });
      });
  },

  showProductsCategory(req, res) {
    Product.findAll({ include: { model: Category, attributes: ["name"] } })
      .then((product) =>
        res
          .status(200)
          .send({ message: "Search All Product and Category result:", product })
      )
      .catch((err) => {
        console.error(err);
        res.send({ message: "Some error has occurred", err });
      });
  },

  productById(req, res) {
    Product.findAll({
      where: {
        id: req.params.id,
      },
      include: { model: Category, attributes: ["name"] },
    })
      .then((product) =>
        res
          .status(200)
          .send({ message: "your Product shorted By ID:", product })
      )
      .catch((err) => {
        console.error(err);
        res.send({ message: "Some error has occurred", err });
      });
  },

  productByName(req, res) {
    Product.findAll({
      where: { name: req.params.name },
    })
      .then((product) =>
        res
          .status(200)
          .send({ message: "your Product given By Name:", product })
      )
      .catch((err) => {
        console.error(err);
        res.send({ message: "Some error has occurred", err });
      });
  },

  productByPrice(req, res) {
    Product.findAll({
      where: { price: req.params.price },
    })
      .then((product) =>
        res
          .status(200)
          .send({ message: "your Product given By Price:", product })
      )
      .catch((err) => {
        console.error(err);
        res.send({ message: "Some error has occurred", err });
      });
  },

  productListPrice(req, res) {
    Product.findAll({
      order: [["price", "DESC"]],
    })
      .then((products) =>
        res
          .status(200)
          .send({ message: "your Product given By Price:", products })
      )
      .catch((err) => {
        console.error(err);
        res.send({ message: "Some error has occurred", err });
      });
  },
};

module.exports = ProductController;
