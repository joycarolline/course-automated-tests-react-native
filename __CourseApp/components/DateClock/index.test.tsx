import { render, screen, fireEvent } from '@testing-library/react-native';
import DateClock from './index';
import * as hook from '../../hooks/useSwipe';

test(`
  Dado a data atual 15/09/2023
  Quando renderizar o componente DateClock
    E o usuário deslizar o dedo para a esquerda
  Então deve mostrar o dobro do numero
`, () => {
  jest.spyOn(hook, 'useSwipe').mockImplementation(() => ({
    onTouchStart: () => {},
    onTouchEnd: () => {},
  }));

  // Act
  render(<DateClock />);

  fireEvent(screen.getByTestId('date-clock'), 'onTouchStart');

  // Assert
  expect(screen.getByText('16')).toBeTruthy();
});
