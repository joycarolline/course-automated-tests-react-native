import {
  render,
  screen,
  fireEvent,
  userEvent,
  waitFor,
} from '@testing-library/react-native';
import ProfileScreen from './ProfileScreen';
import React from 'react';
import {Alert} from 'react-native';
import axios from 'axios';

jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({
    params: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluIiwibmFtZSI6InR1cm1hIiwiYmlydGhkYXkiOiIyMDIzLTA4LTIzIiwiaWF0IjoxNjkyODMwODc1LCJleHAiOjE2OTI4MzQ0NzV9.53J1J3udw26mXeRKXqKiC6vjMsg6v4QgV04LecTF4GQ',
    },
  }),
}));

//jest.spyOn(React, 'useRef').mockReturnValue({current: null});

describe('ProfileScreen', () => {
  beforeAll(() => {
    jest.spyOn(Alert, 'alert');
    jest.useFakeTimers();
  });

  test(`
  Given a profile screen
    And a token
  When the user was logged
  Then should show the user data
`, async () => {
    // arrange

    // act
    await waitFor(() => render(<ProfileScreen />));

    // assert
    expect(screen.getByDisplayValue('turma')).toBeVisible();
    expect(screen.getByDisplayValue('Admin')).toBeVisible();
    expect(screen.getByDisplayValue('2023-08-23')).toBeVisible();
    expect(screen.getByText('Salvar')).toBeVisible();
  });

  test(`
  Given a profile screen
    And a token of logged user
  When the user change name field
    And press the save button
  Then should change the user data
`, async () => {
    // arrange
    await waitFor(() => render(<ProfileScreen />));

    // act
    const user = userEvent.setup();
    const nameInput = screen.getByPlaceholderText('Nome');
    user.clear(nameInput);
    await user.type(nameInput, 'teste');
    await user.press(screen.getByLabelText('Salvar'));

    screen.getByPlaceholderText('Nome');

    // assert
    expect(screen.getByPlaceholderText('Nome')).toHaveProp('value', 'teste');
    expect(screen.getByText('Salvar')).toBeVisible();
  });

  test(`Erro`, async () => {
    // arrange
    jest.doMock('../api/profile', () => ({
      profile: async () => {
        throw new Error('Erro Aleatorio');
      },
    }));

    // jest.spyOn(axios, 'put').mockImplementation(() => {
    //   throw new Error('Erro Aleatorio');
    // });

    await waitFor(() => render(<ProfileScreen />));

    // act
    const user = userEvent.setup();
    const nameInput = screen.getByPlaceholderText('Nome');
    user.clear(nameInput);
    await user.type(nameInput, 'teste');
    await user.press(screen.getByLabelText('Salvar'));

    screen.getByPlaceholderText('Nome');

    // assert
    expect(screen.getByPlaceholderText('Nome')).toHaveProp('value', 'teste');
    expect(screen.getByText('Salvar')).toBeVisible();
  });
});
