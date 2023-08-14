import {jest} from '@jest/globals';
import {getUserProfile} from './UserProfileAPI';
import axios from 'axios';
import {backendEndpoint} from './api.config';

// jest.mock("axios", () => {
//   const originalAxios = jest.requireActual("axios");
//   return {
//     ...originalAxios,
//     create: jest.fn(() => originalAxios),
//   };
// });

jest.mock('./Api.config', () => {
  return {
    backendEndpoint: {
      get: () => ({
        data: {
          id: 1,
          name: 'John Doe',
          email: 'john@doe.com',
        },
      }),
    },
  };
});

it(`Given an user is logged in
    When the app send the user id to the backend API
    Then user data should be returned `, async () => {
  // Arrange
  // const getMock = jest.spyOn(axios.create(), "get").mockResolvedValueOnce({
  //   data: {
  //     id: 1,
  //     name: "John Doe",
  //     email: "john@doe.com",
  //   },
  // });
  const userId = 1;

  // Act
  const userProfile = await getUserProfile(userId);

  // Assert
  expect(userProfile).toEqual({
    id: 1,
    name: 'John Doe',
    email: 'john@doe.com',
  });
});
