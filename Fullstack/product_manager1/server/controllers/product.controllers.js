const Product = require('../models/product.model');

module.exports = {

createProduct : (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
    },

getAllProducts : (request, response) => {
    Product.find({})
    .then(product => response.json(product))
    .catch(err => response.json(err))
    },

getProduct : (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
    },

updateProduct : (request, response) => {
    Product.updateOne({_id: request.params.id}, request.body, {new: true})
    .then(updatedProduct => response.json({updatedProduct}))
    .catch(err => response.json(err))
    },
deleteProduct : (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(result => response.json({ result: result }))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
    }
}