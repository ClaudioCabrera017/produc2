const Product = require('../models/product.model');


module.exports.all = (req, res) => {
  Product.find({})
    .then((products) => res.json({ products: products }))
    .catch((error) => res.json({ message: "Something went wrong when get all products", error: error }));
};

module.exports.create = (req, res) => {
  Product.create(req.body)
    .then((product) => res.json({ product: product }))
    .catch((error) => res.json({ message: "Something went wrong when create a product", error: error }));
};

module.exports.find = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.json({ product: product }))
    .catch((error) => res.json({ message: "Something went wrong then find a product", error: error }));
};