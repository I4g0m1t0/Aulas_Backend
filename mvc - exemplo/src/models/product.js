const products = []

class Product {
    constructor(title, price, validation) {
        this.title = title
        this.price = price
        this.validation = validation
    }

    save() {
        products.push(this)
    }

    static fetchAll() {
        return products
    }
}

module.exports = Product