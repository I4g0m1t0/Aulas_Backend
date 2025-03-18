const Product = require('../models/product')

class ProductController {
    static insert(req, res) {
        const { title, price, validation } = req.body

        const product = new Product(title, price, validation)
        product.save()

        res.status(201).json(product)
    }

    static findAll(req, res) {
        const products = Product.fetchAll()

        res.json(products)
    }
}

module.exports = ProductController