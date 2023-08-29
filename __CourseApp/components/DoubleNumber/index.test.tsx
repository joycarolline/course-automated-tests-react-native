import { render, screen, fireEvent } from '@testing-library/react-native';
import DoubleNumber from '.';

test(`
  Dado um numero inteiro 7
  Quando renderizar o componente DoubleNumber
  Então deve mostrar o dobro do numero
`, () => {
  // Arrange
  const num = 7;

  // Act
  render(<DoubleNumber num={num} />);

  // Assert
  expect(screen.getByText('49')).toBeTruthy();
});
