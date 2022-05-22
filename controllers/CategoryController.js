const { Category } = require("../models/index.js");

const CategoryController = {
  create(req, res) {
    Category.create({ ...req.body })
      .then((category) =>
        res
          .status(201)
          .send({ message: "Category was successfully created", category })
      )
      .catch((err) => {
        console.error(err);
        res.send({ message: "Some error has occurred", err })
      });
  },

  showAllcategoryProduct(req, res) {
    Category.findAll().then((category) =>
      res.status(200).send({ message: "Categories Listed", category })
    ).catch((err) => {
      console.error(err);
      res.send({ message: "Some error has occurred", err })
    });
  },

  categoryById(req, res) {
    Category.findOne({
      where: {
        id: req.params.id,
      },
    }).then((category) =>
      res.status(200).send({ message: "Categories by Id Listed: ", category })
    ).catch((err) => {
      console.error(err);
      res.send({ message: "Some error has occurred", err })
    });
  },

  categorByName(req, res) {
    Category.findAll({
      where: { name: req.params.name },
    }).then((category) =>
      res.status(200).send({ message: "your Product given By Name:", category })
    ).catch((err) => {
      console.error(err);
      res.send({ message: "Some error has occurred", err })
    });
  },
};

module.exports = CategoryController;
