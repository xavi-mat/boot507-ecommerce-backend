const { Category, Product, ProductCategory } = require("../models/index.js");

const CategoryController = {
    create(req, res, next) {
        Category.create({ ...req.body })
            .then((category) =>
                res
                    .status(201)
                    .send({ message: "Category was successfully created", category })
            )
            .catch((err) => {
                err.origin = "Category 1";
                next(err);
            });
    },

    showAllcategoryProduct(req, res, next) {
        Category.findAll({
            include: {
                model: Product,
                attributes:["id", "name"],
                through:{
                    model: ProductCategory,
                    attributes: []
                }
            }
        })
            .then((category) =>
                res.status(200).send({ message: "Categories Listed", category })
            )
            .catch((err) => {
                err.origin = "Category 2";
                next(err);
            });
    },

    categoryById(req, res, next) {
        Category.findOne({
            where: {
                id: req.params.id,
            },
            include: {
                model: Product,
                attributes:["id", "name"],
                through:{
                    model: ProductCategory,
                    attributes: []
                }
            }
        })
            .then((category) =>
                res.status(200).send({ message: "Categories by Id Listed: ", category })
            )
            .catch((err) => {
                err.origin = "Category 3";
                next(err);
            });
    },

    categorByName(req, res, next) {
        Category.findAll({
            where: { name: req.params.name },
            include: {
                model: Product,
                attributes:["id", "name"],
                through:{
                    model: ProductCategory,
                    attributes: []
                }
            }
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

    updateCategory(req, res, next) {
        let valid = true;
        if (!req.body.name) {
            valid = false;
        }
        if (!valid) {
            res
                .status(400)
                .send({ message: "Category name is required" });
        }

        Category.update(
            req.body,
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
                err.origin = "Category 4";
                next(err);
            });
    },

    deleteCategory(req, res, next) {
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
                err.origin = "Category 5";
                next(err);
            });
    },
};

module.exports = CategoryController;
