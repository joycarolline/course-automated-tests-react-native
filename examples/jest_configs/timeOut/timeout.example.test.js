function sum(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 4000); // simulating async operation: 3s
  });
}

jest.setTimeout(5000);

it(`test TimeOut`, async () => {
  // Arrange
  const a = 5;
  const b = 10;

  // Act
  const sut = await sum(a, b);

  // Assert
  expect(sut).toBe(15);
});
