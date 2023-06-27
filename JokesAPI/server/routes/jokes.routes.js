const JokeController = require('../controllers/jokes.controllers')

module.exports = (app) => {
    // api Test
    app.get('/api/testing', JokeController.apiTest)
    
    // create joke
    app.post('/api/jokes/new', JokeController.createJoke)

    // display all jokes
    app.get('/api/jokes', JokeController.allJokes)

    // read one
    app.get('/api/jokes/:id', JokeController.readOne)

    // update joke
    app.put('/api/jokes/:id', JokeController.update)

    // delete one
    app.delete('/api/jokes/:id', JokeController.delete)
}

