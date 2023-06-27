const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: String,
    },
    description: {
        type: String,
    }
})

const Products = mongoose.model("Products", ProductSchema)

module.exports = Products;