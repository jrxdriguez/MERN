// import express and store express in a variable named express
const  express = require("express")

const app = express()
const port = 8000


app.use(express.json())
app.use(express.urlencoded({extended: true}))

const {faker} = require('@faker-js/faker');

const createUser = () => {
    const newFake = {
        password: faker.internet.password({length: 8, pattern: /[A-Z]/}),
        email: faker.internet.email({provider: 'gmail.com'}),
        phoneNumber: faker.phone.number('510-###-####'),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid()
    };
    return newFake;
};
const newFakeUser = createUser();
console.log(newFakeUser);


const createCompany = () => {
    const newFake2 = {
        _id: faker.string.uuid(),
        name: faker.person.fullName(),
        address:
            {
                street: faker.location.streetAddress(),
                city: faker.location.city(),
                state: faker.location.state(),
                zipcode: faker.location.zipCode(),
                country: faker.location.country(),
            }
    };
    return newFake2; 
};
const newFakeCompany = createCompany();
console.log(newFakeCompany);

//const userCompany = (createUser(), createCompany());
//console.log(userCompany);

//ROUTES
app.get('/api', (req, res)=> {
    res.json({message: "Hello!"})
})

app.get('/api/users/new', (req, res)=> {
    res.json({results: newFakeUser})
})

app.get('/api/companies/new', (req, res)=> {
    res.json({results: newFakeCompany})
})

app.get('/api/user/company', (req, res)=> {
    res.json({results: newFakeUser, results2: newFakeCompany})
})



app.listen(port, () => console.log(`Welcome to mi casa on new port: ${port}`))