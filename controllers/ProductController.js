const { Product, Category, ProductCategory } = require("../models/index.js");
const path = require("path");

const ProductController = {

  create(req, res, next) {
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
        err.origin = "Product 1";
        next(err);
      });
  },

  updateProduct(req, res, next) {
    let valid = true;
    if (req.body.name === "") {
      valid = false;
    }
    if (!valid) {
      res
        .status(400)
        .send({ message: "Insert the name of the product u want to update" });
    }

    // If there is an image, save the filename
    if (req.file) {
      req.body.image = req.file.filename;
    }

    Product.update(
      req.body,
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then(result => {
        if (result[0]) {
          res.send({ message: "Product was successfully updated" })
        } else {
          res.send({ message: "Unable to update product " + req.params.id })
        }
      })
      .catch((err) => {
        err.origin = "Product 2";
        next(err);
      });
  },

  deleteProduct(req, res, next) {
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
        err.origin = "Product 3";
        next(err);
      });
  },

  showProductsCategory(req, res, next) {
    Product.findAll({
      include: {
        model: Category,
        attributes: ["id", "name"],
        through: { model: ProductCategory, attributes: [] }
      }
    })
      .then((product) =>
        res
          .status(200)
          .send({ message: "Search All Product and Category result:", product })
      )
      .catch((err) => {
        err.origin = "Product 4";
        next(err);
      });
  },

  productById(req, res, next) {
    Product.findAll({
      where: {
        id: req.params.id,
      },
      include: {
        model: Category,
        attributes: ["id", "name"],
        through: { model: ProductCategory, attributes: [] }
      },
    })
      .then((product) =>
        res
          .status(200)
          .send({ message: "your Product By ID:", product })
      )
      .catch((err) => {
        err.origin = "Product 5";
        next(err);
      });
  },

  productByName(req, res, next) {
    Product.findAll({
      where: { name: req.params.name },
    })
      .then((product) =>
        res
          .status(200)
          .send({ message: "your Product given By Name:", product })
      )
      .catch((err) => {
        err.origin = "Product 6";
        next(err);
      });
  },

  productByPrice(req, res, next) {
    Product.findAll({
      where: { price: req.params.price },
    })
      .then((product) =>
        res
          .status(200)
          .send({ message: "your Product given By Price:", product })
      )
      .catch((err) => {
        err.origin = "Product 7";
        next(err);
      });
  },

  productListPrice(req, res, next) {
    Product.findAll({
      order: [["price", "DESC"]],
    })
      .then((products) =>
        res
          .status(200)
          .send({ message: "your Product given By Price:", products })
      )
      .catch((err) => {
        err.origin = "Product 8";
        next(err);
      });
  },

  async getImage(req, res, next) {

    try {
      const filepath = path.join(__dirname, '../uploads', req.params.image);
      res.sendFile(filepath, { headers: { "Content-Type": "image/jpeg" } });

    } catch (error) {
      error.origin = "Product 9";
      next(error);
    }
  }
};

module.exports = ProductController;
