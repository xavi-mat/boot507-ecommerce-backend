const { Category } = require("../models/index.js");

const CategoryController = {
  create(req, res) {
    Product.create({ ...req.body })

      .then((category) =>
        res
          .status(201)
          .send({ message: "Category was successfully created", category })
      )

      .catch(console.error);
  },
};

module.exports = CategoryController;
