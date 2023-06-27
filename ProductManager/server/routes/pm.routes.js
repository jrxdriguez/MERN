const ProductController = require('../controllers/pm.controller')

module.exports = (app) => {
    // api Test
    app.get('/api/testing', ProductController.apiTest)

     // create product
     app.post('/api/products/new', ProductController.createProduct)

      // display all products
    app.get('/api/products', ProductController.allProducts)

        // read one
        app.get('/api/products/:id', ProductController.readOne)

        // update joke
        app.put('/api/products/:id', ProductController.update)
    
        // delete one
        app.delete('/api/products/:id', ProductController.delete)

}
