const { Category, Product } = require("../models/index.js");

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
                res.send({ message: "Some error has occurred", err });
            });
    },

    showAllcategoryProduct(req, res) {
        Category.findAll({ include: Product })
            .then((category) =>
                res.status(200).send({ message: "Categories Listed", category })
            )
            .catch((err) => {
                console.error(err);
                res.send({ message: "Some error has occurred", err });
            });
    },

    categoryById(req, res) {
        Category.findOne({
            where: {
                id: req.params.id,
            },
        })
            .then((category) =>
                res.status(200).send({ message: "Categories by Id Listed: ", category })
            )
            .catch((err) => {
                console.error(err);
                res.send({ message: "Some error has occurred", err });
            });
    },

    categorByName(req, res) {
        Category.findAll({
            where: { name: req.params.name },
        })
            .then((category) =>
                res
                    .status(200)
                    .send({ message: "your Category given By Name:", category })
            )
            .catch((err) => {
                console.error(err);
                res.send({ message: "Some error has occurred", err });
            });
    },

    updateCategory(req, res) {
        let valid = true;
        if (!req.body.name) {
            valid = false;
        }
        if (!valid) {
            res
                .status(400)
                .send({ message: "Insert the name of the Category u want to update" });
        }

        Category.update(
            { ...req.body },
            {
                where: {
                    id: req.params.id,
                },
            }
        )
            .then((category) =>
                res
                    .status(201)
                    .send({ message: "Category was successfully updated", category })
            )
            .catch((err) => {
                console.error(err);
                res.send({ message: "Some error has occurred", err });
            });
    },

    deleteCategory(req, res) {
        Category.destroy({ where: { id: req.params.id } })
            .then((result) => {
                console.log(result);
                if (result) {
                    res.send({ message: "🚨🚨Category was DELETED!!🚨🚨", result })
                } else {
                    res.status(404).send({message: "Category does not exist"})
                }
            })
            .catch((err) => {
                console.error(err);
                res.send({ message: "Some error has occurred", err });
            });
    },
};

module.exports = CategoryController;
