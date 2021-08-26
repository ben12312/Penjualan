const productRouter = require('express').Router();
const Controller = require('../controller/product');

productRouter.get('/', Controller.showProduct);
productRouter.get('/header', Controller.showTransactionHeader);
productRouter.get('/detail', Controller.showTransactionDetail);

module.exports = productRouter