const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [3,"Author name must contain at least 3 characters!"]
    }
})

const Authors = mongoose.model("Authors", AuthorSchema)

module.exports = Authors;