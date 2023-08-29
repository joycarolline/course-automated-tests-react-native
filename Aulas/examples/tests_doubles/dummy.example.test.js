// Implementação das classes em JavaScript
class Product {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

class DummyCustomer {
  constructor() {}
}

class Invoice {
  constructor(customer) {
    this.customer = customer;
    this.lineItems = [];
  }

  addItemQuantity(product, quantity) {
    const lineItem = new LineItem(this, product, quantity);
    this.lineItems.push(lineItem);
  }

  getLineItems() {
    return this.lineItems;
  }
}

class LineItem {
  constructor(invoice, product, quantity) {
    this.invoice = invoice;
    this.product = product;
    this.quantity = quantity;
  }
}

test("Invoice - Adicionar LineItem Dummy Object", () => {
  // Arrange
  const QUANTITY = 1;
  const product = new Product("Product Name", "123");
  const invoice = new Invoice(new DummyCustomer());
  const expectItem = new LineItem(invoice, product, QUANTITY);

  // Act
  const sut = invoice.addItemQuantity(product, QUANTITY);

  // Assert
  const lineItems = invoice.getLineItems();
  expect(lineItems.length).toBe(1);

  const actual = lineItems[0];
  expect(actual.invoice).toBe(expectItem.invoice);
  expect(actual.product).toBe(expectItem.product);
  expect(actual.quantity).toBe(expectItem.quantity);
});
