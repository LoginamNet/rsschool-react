import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FormModal } from './FormModal';

const mockSetModal = jest.fn();

afterEach(cleanup);

describe('Form modal test', function () {
  test('Form modal can be rendered and closed', async () => {
    render(<FormModal setModal={mockSetModal} isModalOpen={true} />);

    const button = screen.getByRole('formmodalclose');
    userEvent.click(button);
  });
});
