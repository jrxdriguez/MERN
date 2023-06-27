// Step 1 - import all dependencies 
const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config()
const port = 8000


// Step 2 - configure express
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

require('./configs/mongoose.config')

// One way
const Routes = require('./routes/authors.routes')
Routes(app)

//Step 3 - listen on a port and provide feedback
app.listen(port, () => console.log(`Welcome to mi casa. Connected to port ${port}`))