import {
  render,
  screen,
  fireEvent,
  userEvent,
  waitFor,
} from '@testing-library/react-native';
import {Alert, Platform} from 'react-native';
import axios from 'axios';

import successStub from '../api/success-stub.json';
import errorStub from '../api/error-stub.json';
import LoginScreen from './LoginScreen';

const renderLoginScreen = async () =>
  await waitFor(() => render(<LoginScreen />));

describe('Login Screen', () => {
  beforeAll(() => {
    jest.spyOn(Alert, 'alert');
    jest.replaceProperty(Platform, 'OS', 'ios');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test(`
    Given a login screen with input "E-mail"
        AND input "Senha"
    When the user entry with email "Admin"
        AND input password "admin"
    Then should show success message "Sucesso" "Voce está logado"
`, async () => {
    jest.useFakeTimers();
    jest.spyOn(axios, 'post').mockResolvedValue(successStub);
    jest.spyOn(console, 'log');

    // arrange
    const email = 'Admin';
    const password = 'admin';

    await renderLoginScreen();

    const emailInput = screen.getByPlaceholderText('E-mail');
    const passwordInput = screen.getByPlaceholderText('Senha');
    const buttonSubmit = screen.getByLabelText('Botão de entrar');

    fireEvent.changeText(emailInput, email);
    fireEvent.changeText(passwordInput, password);

    // act
    //await fireEvent.press(buttonSubmit);
    const user = userEvent.setup();
    await user.press(buttonSubmit);

    // assert
    expect(Alert.alert).toHaveBeenCalledWith('Sucesso', 'Voce está logado.', [
      {
        text: 'OK',
      },
    ]);
  });

  test(`
    Given a login screen with input "E-mail"
        AND input "Senha"
    When the user entry with email "wrong"
        AND input password "admin"
    Then should show success message "Erro" "Invalid credentials"
`, async () => {
    jest.replaceProperty(Platform, 'OS', 'android');
    jest.spyOn(axios, 'post').mockRejectedValue({
      response: errorStub,
    });

    jest.spyOn(axios, 'isAxiosError').mockReturnValue(true);

    // arrange
    const email = 'wrong';
    const password = 'admin';

    await renderLoginScreen();

    const emailInput = screen.getByPlaceholderText('E-mail');
    const passwordInput = screen.getByPlaceholderText('Senha');
    const buttonSubmit = screen.getByLabelText('Botão de entrar');

    fireEvent.changeText(emailInput, email);
    fireEvent.changeText(passwordInput, password);

    // act
    await fireEvent.press(buttonSubmit);

    // assert
    expect(Alert.alert).toHaveBeenCalledWith('Erro', 'Invalid credentials');
  });

  test(`
    Given a login screen with input "E-mail"
        AND input "Senha"
    When the user entry with email "wrong"
        AND input password "admin"
    Then should show success message "Erro" "Erro inesperado"
`, async () => {
    jest.spyOn(axios, 'post').mockRejectedValue({
      message: 'Erro inesperado',
    });

    jest.spyOn(axios, 'isAxiosError').mockReturnValue(false);

    // arrange
    const email = 'wrong';
    const password = 'admin';

    await renderLoginScreen();

    const emailInput = screen.getByPlaceholderText('E-mail');
    const passwordInput = screen.getByPlaceholderText('Senha');
    const buttonSubmit = screen.getByLabelText('Botão de entrar');

    fireEvent.changeText(emailInput, email);
    fireEvent.changeText(passwordInput, password);

    // act
    await fireEvent.press(buttonSubmit);

    // assert
    expect(Alert.alert).toHaveBeenCalledWith('Erro', 'Erro inesperado');
  });
});
