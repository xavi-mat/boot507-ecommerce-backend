const { Product } = require("../models/index.js");

const ProductController = {
  create(req, res) {
    Product.create({ ...req.body })

      .then((product) =>
        res
          .status(201)
          .send({ message: "Product was successfully created", product })
      )

      .catch(console.error);
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
  ////////////////////////////////////////
  //Revisar (quiza sea un problema de las categorias)
  /////
  showProductsCategory(req, res) {
    Product.findAll({
      where: { category: req.params.categories },
    }).then((product) =>
      res.status(200).send({ message: "Search Category result:", product })
    );
  },
  /////////////////////////////////////

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

  ////////////////////
  //revisar con xavi////
  //////////////////
  productListPrice(req, res) {
    Product.findAll({
      order: ["price", "DESC"],
    }).then((products) =>
      res.status(200).send({ message: "your Product given By Price:", product })
    );
  },
};

module.exports = ProductController;
