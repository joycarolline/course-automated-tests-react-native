import { screen, fireEvent, render } from '@testing-library/react-native';
import TodoItem from './index';

test(`
  Given a todo item with id "1" and title "Test"
  When it is rendered
  Then it should have a title with text "Test"
`, () => {
  // Arrange
  const item = { id: '1', title: 'Test' };

  // Act
  render(<TodoItem item={item} />);

  // Assert
  expect(screen.getByTestId('todo-title')).toHaveTextContent('Test');
});

test(`
  Given a todo item with id "1" and title "Test"
  When it is rendered
    And the checkbox "Feito" is marked
  Then it should have a prop "isChecked" with value "true"
`, () => {
  // Arrange
  const item = { id: '1', title: 'Test' };

  // Act
  render(<TodoItem item={item} />);
  fireEvent.press(screen.getByTestId('todo-done'));

  // Assert
  expect(screen.getByTestId('todo-done')).toHaveProp('isChecked', true);
});
