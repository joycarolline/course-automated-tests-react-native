import {render, screen, act, waitFor} from '@testing-library/react-native';
import HomeScreen from './HomeScreen';
import fakenewsstub from '../api/fakenews-stub.json';
import axios from 'axios';
describe('HomeScreen', () => {
  test(`
        Given a HomeScreen
        When the screen was loaded
        Then should show a list with 1 fakenews containing title, description, image, published_at and author
    `, async () => {
    // arrange
    jest.spyOn(axios, 'get').mockResolvedValue(fakenewsstub);

    // act
    await waitFor(async () => {
      await render(<HomeScreen />);
    });

    // assert
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
