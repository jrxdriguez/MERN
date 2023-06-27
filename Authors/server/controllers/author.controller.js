const Author = require('../models/authors.model')

module.exports.apiTest = (req, res) => {
    res.json({message: "It works!"})
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then((newAuthor) => {res.json({results: newAuthor})})
    .catch((err) => {res.status(400).json({err: err})})
}

module.exports.allAuthors = (req, res) => {
    Author.find()
    .then((allAuthors) => {res.json({results: allAuthors})})
    .catch((err) => {res.json({err: err})})
}

module.exports.readOne = (req, res) => {
    Author.findOne({_id: req.params.id})
    .then((oneAuthor) => {res.json({results: oneAuthor})})
    .catch((err) => {res.json({err: err})})
}

module.exports.update = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then((updateAuthor) => {res.json({results: updateAuthor})})
    .catch((err) => {res.status(400).json({err: err})})
}

module.exports.delete = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then((deleteAuthor) => {res.json({results: deleteAuthor})})
    .catch((err) => {res.json({err: err})})
}
