const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    // api Test
    app.get('/api/testing', AuthorController.apiTest)

    // create product
    app.post('/api/authors/new', AuthorController.createAuthor)

    // display all products
    app.get('/api/authors', AuthorController.allAuthors)

    // read one
    app.get('/api/authors/:id', AuthorController.readOne)

    // update one
    app.put('/api/authors/:id', AuthorController.update)

    // delete one
    app.delete('/api/authors/:id', AuthorController.delete)

}