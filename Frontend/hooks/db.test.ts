import * as db from './db';
//import AsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: async () => Promise.reject('Unexpected error'),
  getItem: async () => Promise.reject('Unexpected error'),
  removeItem: async () => Promise.reject('Unexpected error'),
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('storeData', () => {
  test('should call console.log in error case', async () => {
    // Arrange
    const consoleLogSpy = jest.spyOn(console, 'log');

    // Act
    await db.storeData('key', {name: 'Isaias'});

    // Assert
    expect(consoleLogSpy).toBeCalledTimes(1);
  });
});

describe('getData', () => {
  test('should call console.log in error case', async () => {
    // Arrange
    const consoleLogSpy = jest.spyOn(console, 'log');

    // Act
    await db.getData('key');

    // Assert
    expect(consoleLogSpy).toBeCalledTimes(1);
  });
});

describe('updateData', () => {
  test('should call console.log in error case', async () => {
    // Arrange
    const consoleLogSpy = jest.spyOn(console, 'log');

    // Act
    await db.updateData('key', {name: 'Isaias'});

    // Assert
    expect(consoleLogSpy).toBeCalledTimes(1);
  });
});
