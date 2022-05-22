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
        res.send({ message: "Some error has occurred" })
      });
  },
};

module.exports = ProductController;
