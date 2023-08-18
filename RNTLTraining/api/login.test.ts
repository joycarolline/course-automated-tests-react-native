import {login} from './login';
import axios from 'axios';
import success_stub from './success-stub.json';

test(`
    Given a request with email "Admin"
      And password "admin"
    When execute a request POST for url /api/login
    Then should return token
`, async () => {
  jest.spyOn(axios, 'post').mockResolvedValue(success_stub);

  // arrange
  const email = 'Admin';
  const password = 'admin';

  // act
  const sut = await login(email, password);

  // assert
  expect(sut).toHaveProperty('token');
});

test(`
    Given a request with email "Admin"
      And invalid password "test"
    When execute a request POST for url /api/login
    Then should return a message "Invalid credentials"
        And status code 401
`, async () => {
  // arrange
  const email = 'Admin';
  const password = 'test';

  // act
  const sut = await login(email, password);

  // assert
  expect(sut.status).toEqual(401);
  expect(sut.data.message).toEqual('Invalid credentials');
});

test(`
    Given an axios simulated
    When execute a request POST for url /api/login
    Then should return null
`, async () => {
  // arrange
  jest.spyOn(axios, 'post').mockImplementation(() => {
    throw new Error('Erro Aleatorio');
  });

  const email = 'Admin';
  const password = 'test';

  // act
  const sut = await login(email, password);

  // assert
  expect(sut).toEqual('Erro Aleatorio');
});
