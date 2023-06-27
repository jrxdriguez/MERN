const mongoose = require('mongoose')

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ob8cnxz.mongodb.net/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a Database Commlink Sync with: ${database}`))
    .catch(err => console.log('Something went wrong when connecting to the database' ,err));