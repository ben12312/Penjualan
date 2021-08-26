const { Product, Transaction_Header, Transaction_Detail } = require('../models');

class Controller {
    static showProduct(req, res, next) {
        Product.findAll()
            .then(products => {
                res.status(200).json({ products })
            })
            .catch(err => {
                res.status(404).json({
                    message: 'Product not found'
                })
            })
    }

    static showTransactionHeader(req, res, next) {
        Transaction_Header.findAll()
            .then(transactionHeaders => {
                res.status(200).json({ transactionHeaders })
            })
            .catch(err => {
                res.status(404).json({
                    message: 'TransactionHeader not found'
                })
            })
    }

    static showTransactionDetail(req, res, next) {
        Transaction_Detail.findAll()
            .then(transactionDetail => {
                res.status(200).json({ transactionDetail })
            })
            .catch(err => {
                res.status(404).json({
                    message: 'TransactionDetail not found'
                })
            })
    }
}

module.exports = Controller