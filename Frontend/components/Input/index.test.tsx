import {render, screen, fireEvent} from '@testing-library/react-native';
import Input from '.';

test(`
    Dado o componente de Input com label "E-mail"
    Quando renderiza-lo
    Então deve-se conter a label "E-mail" em tela
`, () => {
  // arrange
  const component = <Input label="E-mail" />;

  // act
  render(component);

  // assert
  expect(screen.getByPlaceholderText('E-mail')).toBeVisible();
});

test(`
    Dado o componente de Input com label "E-mail"
    Quando renderiza-lo
     E modificar seu valor para "email@teste.com"
    Então deve-se conter a label "E-mail" em tela
     E valor "email@teste.com"
`, () => {
  // arrange

  const component = <Input label="E-mail" />;
  const email = 'email@teste.com';
  render(component);

  // act
  fireEvent.changeText(screen.getByPlaceholderText('E-mail'), email);

  // assert
  expect(screen.getByDisplayValue('email@teste.com')).toBeVisible();
});

test(`
    Dado o componente de Input com label "Senha" com a prop secureTextEntry
    Quando renderiza-lo
     E modificar seu valor para "123"
    Então deve-se conter a label "Senha" em tela
     E valor "123"
     E propriedade secureTextEntry como true
`, () => {
  // arrange

  const component = <Input label="Senha" secureTextEntry />;
  const password = '123';
  render(component);

  // act
  fireEvent.changeText(screen.getByPlaceholderText('Senha'), password);

  // assert
  const element = screen.getByPlaceholderText('Senha');
  expect(screen.getByDisplayValue('123')).toBeVisible();
  expect(element).toHaveProp('secureTextEntry', true);
});
