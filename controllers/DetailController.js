const { Detail } = require("../models/index.js");

const DetailController = {
  create(req, res) {
    Detail.create({ ...req.body })

      .then((detail) =>
        res
          .status(201)
          .send({ message: "detail was successfully created", detail })
      )

      .catch((err) => {
        console.error(err);
        res.send({ message: "Some error has occurred" });
      });
  },

  showAllcategoryProduct(req, res) {
    Category.findAll().then((category) =>
      res.status(200).send({ message: "Categories Listed: ", category })
    );
  },
};

module.exports = DetailController;
