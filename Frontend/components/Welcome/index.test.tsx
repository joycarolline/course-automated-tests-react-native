import {render, screen, fireEvent} from '@testing-library/react-native';
import Welcome from '.';

test(`
  Dado que eu tenho um componente Welcome
  Quando eu renderiza-lo na tela
  Então deve ter a mensagem "Bem Vindo Turma!"`, () => {
  // arrange
  const component = <Welcome />;

  // act
  render(component);

  // assert
  expect(screen.getByText('Bem Vindo Turma!')).toBeVisible();
});

test(`
  Dado que eu tenho um componente Welcome
    E um botão com o texto "Clique aqui"
  Quando eu renderiza-lo na tela
    E clicar no 1x botão "Clique aqui"
  Então deve ter a mensagem "Bem Vindo Turma!"
    E a mensagem "Você clicou 3 vezes"`, () => {
  // arrange
  const component = <Welcome />;
  render(component);

  // act
  fireEvent(screen.getByText('Clique aqui'), 'press');
  fireEvent(screen.getByText('Clique aqui'), 'press');
  fireEvent(screen.getByText('Clique aqui'), 'press');

  // assert
  expect(screen.getByText('Bem Vindo Turma!')).toBeVisible();
  expect(screen.getByText('Você clicou 3 vezes')).toBeVisible();
});
