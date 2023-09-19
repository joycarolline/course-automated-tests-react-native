import {fakenews} from './fakenews';
import axios from 'axios';

test('should return axios response error if isAxiosError was true', async () => {
  // Arrange
  jest.spyOn(axios, 'isAxiosError').mockReturnValueOnce(true);
  jest.spyOn(axios, 'get').mockRejectedValueOnce({
    response: {
      message: 'Invalid token',
      status: 401,
    },
  });

  const mockToken = 'auth-token';

  // Act
  const sut = await fakenews(mockToken);

  // Assert
  expect(sut).toEqual({
    message: 'Invalid token',
    status: 401,
  });
});

test('should return error message', async () => {
  // Arrange
  jest
    .spyOn(axios, 'get')
    .mockImplementation(() => Promise.reject({message: 'Unexpected error'}));
  const mockToken = 'auth-token';

  // Act
  const sut = await fakenews(mockToken);

  // Assert
  expect(sut).toEqual('Unexpected error');
});
