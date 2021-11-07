const ProductController = require('../controllers/product.controllers');


module.exports = function(app){
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/all/products', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);

}