import axios from 'axios';
import {profile} from './profile';
test('should return success response', async () => {
  // Arrange
  const body = {
    email: 'teste@email.com',
    birthday: '2000-12-12',
    name: 'Isaias',
    password: '1234',
  };
  const authToken = 'abcd';

  jest.spyOn(axios, 'put').mockResolvedValue({
    data: {
      token: authToken,
    },
  });

  // Act
  const sut = await profile(authToken, body);

  // Assert
  expect(sut).toEqual({token: authToken});
});

test('should throw error', async () => {
  // Arrange
  jest.spyOn(axios, 'put').mockRejectedValue(new Error('Unexpected error'));
  const body = {
    email: 'teste@email.com',
    birthday: '2000-12-12',
    name: 'Isaias',
    password: '1234',
  };
  const authToken = 'abcd';

  // Act, Assert
  expect(async () => await profile(authToken, body)).rejects.toThrow(
    'Unexpected error',
  );
});
