const request = require("supertest");
const app = require("./index");

test(`
  Given a POST request to /api/login
    And email "Admin"
    And password "admin"
  When the request is made
  Then the response should logged token
`, async () => {
  const sut = await request(app)
    .post("/api/login")
    .send({
      email: "Admin",
      password: "admin",
    })
    .expect(200);

  expect(JSON.parse(sut.text)).toHaveProperty("token");
});

test(`
  Given a GET request to /api/fakenews
    And quantity equals 20
  When the request is made
  Then the response should return list of fakenews
`, async () => {
  // arrange
  const quantity = 20;

  // act
  const sut = await request(app).get(`/api/fakenews?quantity${quantity}`);

  // assert
  expect(JSON.parse(sut.text)).toHaveLength(20);
});
