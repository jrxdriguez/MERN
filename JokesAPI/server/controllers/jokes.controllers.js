const Joke = require('../models/jokes.models')

module.exports.apiTest = (req, res) => {
    res.json({message: "It works!"})
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
    .then((newJoke) => {res.json({results: newJoke})})
    .catch((err) => {res.json({err: err})})
}

module.exports.allJokes = (req, res) => {
    Joke.find()
    .then((allJokes) => {res.json({results: allJokes})})
    .catch((err) => {res.json({err: err})})
}

module.exports.readOne = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then((oneJoke) => {res.json({results: oneJoke})})
    .catch((err) => {res.json({err: err})})
}

module.exports.update = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then((updateJoke) => {res.json({results: updateJoke})})
    .catch((err) => {res.json({err: err})})
}

module.exports.delete = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then((deleteJoke) => {res.json({results: deleteJoke})})
    .catch((err) => {res.json({err: err})})
}