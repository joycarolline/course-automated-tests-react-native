import {
  render,
  screen,
  waitFor,
  userEvent,
} from '@testing-library/react-native';
import HomeScreen from './HomeScreen';
import fakenewsstub from '../api/fakenews-stub.json';
import axios from 'axios';

jest.useFakeTimers();

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe('HomeScreen', () => {
  test(`
        Given a HomeScreen
        When the screen was loaded
        Then should show a list with 1 fakenews containing title, description, image, published_at and author
    `, async () => {
    // arrange
    jest.spyOn(axios, 'get').mockResolvedValue(fakenewsstub);

    // act
    render(<HomeScreen />);

    // assert
    await waitFor(() => {
      expect(screen.getByLabelText('Fake News Title')).toBeVisible();
      expect(
        screen.getByLabelText('Descrição da fakenews Fake News Title'),
      ).toBeVisible();
      expect(
        screen.getByLabelText('Imagem da fakenews Fake News Title'),
      ).toBeVisible();
      expect(
        screen.getByLabelText('Data da Publicação da fakenews Fake News Title'),
      ).toBeVisible();
      expect(
        screen.getByLabelText('Autor da fakenews Fake News Title'),
      ).toBeVisible();
    });
  });

  test(`
        Given a HomeScreen
        When the screen was loaded
          And display a list of fakenews with 1 item
          And the user click in like button
        Then should show fakenews with 1 like
    `, async () => {
    // arrange
    jest.spyOn(axios, 'get').mockResolvedValue(fakenewsstub);
    await waitFor(() => {
      render(<HomeScreen />);
    });

    // act
    const user = userEvent.setup({
      delay: 200,
    });
    await user.press(screen.getByLabelText('Botão Adicionar Like'));

    // assert
    await waitFor(() => {
      expect(screen.getByText('1 Curtidas')).toBeVisible();
    });
  });

  test(`
      Given a HomeScreen
      When the screen was loaded
        And display a list of fakenews with 1 item
        And the user click in like button
      Then should show fakenews with 3 like
  `, async () => {
    // arrange
    jest.spyOn(axios, 'get').mockResolvedValue(fakenewsstub);

    await waitFor(() => {
      render(<HomeScreen />);
    });

    // act
    const user = userEvent.setup({
      advanceTimers: () => jest.advanceTimersByTime(1),
    });

    await waitFor(async () => {
      await user.press(screen.getByLabelText('Botão Adicionar Like'));
      await user.press(screen.getByLabelText('Botão Adicionar Like'));
      await user.press(screen.getByLabelText('Botão Adicionar Like'));
    });

    // assert
    await waitFor(() => {
      expect(screen.getByText('3 Curtidas')).toBeVisible();
    });
  });
});
