const Product = require('../models/pm.models')

module.exports.apiTest = (req, res) => {
    res.json({message: "It works!"})
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then((newProduct) => {res.json({results: newProduct})})
    .catch((err) => {res.json({err: err})})
}

module.exports.allProducts = (req, res) => {
    Product.find()
    .then((allProducts) => {res.json({results: allProducts})})
    .catch((err) => {res.json({err: err})})
}

module.exports.readOne = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then((oneJoke) => {res.json({results: oneJoke})})
    .catch((err) => {res.json({err: err})})
}

module.exports.update = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then((updateProduct) => {res.json({results: updateProduct})})
    .catch((err) => {res.json({err: err})})
}

module.exports.delete = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then((deleteProduct) => {res.json({results: deleteProduct})})
    .catch((err) => {res.json({err: err})})
}
