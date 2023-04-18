import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from 'common/render';

import App from './App';
describe('App elements tests', function () {
  test('should render app without crashing', async () => {
    renderWithProviders(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
