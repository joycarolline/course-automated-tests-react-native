import {render, screen, fireEvent} from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

test(`
  Given I am on the Home Screen
  When I press the button "Acessar seu Perfil"
  Then I should be redirected to the Profile Screen
`, () => {
  // Arrange
  const navigateMock = {
    navigate: () => jest.fn(),
  };

  jest.spyOn(navigateMock, 'navigate').mockImplementation(() => {});

  render(<HomeScreen navigation={navigateMock} />);

  const sut = screen.getByText('Acessar seu Perfil');

  // Act
  fireEvent.press(sut);

  // Assert
  expect(navigateMock.navigate).toBeCalledWith('Profile', {name: 'Vinicius'});
});
