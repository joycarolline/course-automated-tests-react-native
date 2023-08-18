const generateFakeNewsList = require("./fakenews");

test(`
    Given a scenario that generates fakenews list with 10 items
    When execute generateFakeNewsList
    Then return array with 10 items
`, () => {
  // arrange
  const quantity = 10;

  // act
  const sut = generateFakeNewsList(quantity);

  // assert
  expect(sut).toHaveLength(10);
});
