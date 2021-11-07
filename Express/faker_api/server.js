const express = require('express');
const app = express();

const faker = require('faker');

app.use(express.json());
app.use(express.urlencoded( { extended: true } ) );

const createUser = () => { 
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }
}