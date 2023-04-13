import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'store';
import { renderWithProviders } from 'common/render';

import { MainModal } from './MainModal';
import { cards } from 'common/data';
import { Main } from 'pages/Main';

const closeModal = jest.fn();

afterEach(cleanup);

// describe('Main modal test', function () {
//   test('Main modal can be rendered and closed by button', async () => {
//     renderWithProviders(<Main />);

//     const button = screen.getByRole('mainmodalclose');
//     expect(button).toBeInTheDocument();
//     userEvent.click(button);
//   });

//   test('Main modal can be rendered and closed by background element', async () => {
//     render(
//       <MainModal
//         closeModal={closeModal}
//         isModalOpen={true}
//         isCardPending={false}
//         modalCard={cards[0]}
//       />
//     );

//     const button = screen.getByRole('mainmodalback');
//     expect(button).toBeInTheDocument();
//     userEvent.click(button);
//   });

//   test('Main modal contains location and description', async () => {
//     render(
//       <MainModal
//         closeModal={closeModal}
//         isModalOpen={true}
//         isCardPending={false}
//         modalCard={cards[0]}
//       />
//     );

//     expect(screen.getByText(`About: ${cards[0].description}`)).toBeInTheDocument();
//     expect(screen.getByText('Wiesbaden, Germany')).toBeInTheDocument();
//   });

//   test('Main modal contains location and description', async () => {
//     render(
//       <MainModal
//         closeModal={closeModal}
//         isModalOpen={true}
//         isCardPending={false}
//         modalCard={cards[0]}
//       />
//     );

//     expect(screen.getByText(`About: ${cards[0].description}`)).toBeInTheDocument();
//     expect(screen.getByText(`${cards[0].user.location}`)).toBeInTheDocument();
//   });

//   test('Main modal contains message on null description', async () => {
//     render(
//       <MainModal
//         closeModal={closeModal}
//         isModalOpen={true}
//         isCardPending={false}
//         modalCard={cards[1]}
//       />
//     );

//     expect(
//       screen.getByText(
//         `About: Author doesn't provide any description for that photo. Be free to use your imagination!`
//       )
//     ).toBeInTheDocument();
//   });

//   test('Main modal contains message on null location', async () => {
//     render(
//       <MainModal
//         closeModal={closeModal}
//         isModalOpen={true}
//         isCardPending={false}
//         modalCard={cards[2]}
//       />
//     );

//     expect(screen.getByText('Unknown location')).toBeInTheDocument();
//   });
// });
