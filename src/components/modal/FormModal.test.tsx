import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FormModal } from './FormModal';

const mockCloseModal = jest.fn();

afterEach(cleanup);

describe('Form modal test', function () {
  test('Form modal can be rendered and closed', async () => {
    render(<FormModal closeModal={mockCloseModal} isModalOpen={true} />);

    const button = screen.getByRole('formmodalclose');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });
});
