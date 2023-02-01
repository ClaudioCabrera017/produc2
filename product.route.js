const ProductController = require('../controllers/product.controller');

module.exports = app => {
  app.get('/api/products', ProductController.all)
  app.post('/api/products/create', ProductController.create);
  app.get('/api/products/:id', ProductController.find);
};