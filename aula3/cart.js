class Cart {
  constructor(customer) {
    this.customer = customer;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
    return this;
  }

  getProducts() {
    return this.products;
  }
}

module.exports = Cart;
