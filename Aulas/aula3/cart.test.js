import Customer from "./customer";
import Cart from "./cart";
import Product from "./product";

describe("Teste mostrando Dummy", () => {
  test(`Given um cliente e um carrinho
        When o cliente adiciona um produto no carrinho
        Then o produto deve estar dentro do carrinho`, () => {
    // Arrange
    const customer = new Customer("John Doe");
    const cart = new Cart(customer);
    const product = new Product("Bola", 10);

    // Act
    const sut = cart.addProduct(product);

    // Assert
    expect(sut.getProducts()).toContain(product);
  });
});
