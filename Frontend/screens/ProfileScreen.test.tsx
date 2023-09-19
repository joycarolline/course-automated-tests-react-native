import {
  render,
  screen,
  userEvent,
  waitFor,
  act,
} from '@testing-library/react-native';
import ProfileScreen from './ProfileScreen';
import React from 'react';

jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({
    params: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluIiwibmFtZSI6InR1cm1hIiwiYmlydGhkYXkiOiIyMDIzLTA4LTIzIiwiaWF0IjoxNjkyODMwODc1LCJleHAiOjE2OTI4MzQ0NzV9.53J1J3udw26mXeRKXqKiC6vjMsg6v4QgV04LecTF4GQ',
    },
  }),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('ProfileScreen', () => {
  beforeAll(() => {
    jest.useFakeTimers({
      advanceTimers: true,
    });
  });
  test(`
  Given a profile screen
    And a token
  When the user was logged
  Then should show the user data
`, async () => {
    // arrange

    // act
    act(() => {
      jest.runAllTimers();
    });

    await waitFor(async () => await render(<ProfileScreen />));

    // assert
    expect(screen.getByDisplayValue('turma')).toBeVisible();
    expect(screen.getByDisplayValue('Admin')).toBeVisible();
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
    // act(() => {
    //   jest.runAllTimers();
    // });

    await waitFor(async () => {
      const user = userEvent.setup();
      const nameInput = screen.getByLabelText('Nome');
      await user.clear(nameInput);
      await user.type(nameInput, 'teste');
      await user.press(screen.getByLabelText('Salvar'));
    });

    screen.getByLabelText('Nome');

    // assert
    expect(screen.getByLabelText('Nome')).toHaveProp('value', 'teste');
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

    await waitFor(async () => await render(<ProfileScreen />));

    // act
    act(() => {
      jest.runAllTimers();
    });

    const user = userEvent.setup();
    const nameInput = screen.getByLabelText('Nome');
    user.clear(nameInput);
    await user.type(nameInput, 'teste');
    await user.press(screen.getByLabelText('Salvar'));

    screen.getByLabelText('Nome');

    // assert
    expect(screen.getByLabelText('Nome')).toHaveProp('value', 'teste');
    expect(screen.getByText('Salvar')).toBeVisible();
  });
});
