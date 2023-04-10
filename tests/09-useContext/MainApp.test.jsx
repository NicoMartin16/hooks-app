import {render, screen} from '@testing-library/react';
import {MainApp} from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('pruebas en <MainApp />', () => {

  test('debe de mostrar el HomePage', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText('HomePage')).toBeTruthy();
  })
})