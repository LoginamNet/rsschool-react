// import React from 'react';
// import { render, screen, cleanup } from '@testing-library/react';
// import { Card } from 'components/cards/Card';
// import { cardsData } from 'common/data';
// import { Cards } from 'components/cards/Cards';

// afterEach(cleanup);

// describe('Cards tests', function () {
//   test('should render Card', () => {
//     render(
//       <Card
//         id={cardsData[0].id}
//         title={cardsData[0].title}
//         brand={cardsData[0].brand}
//         description={cardsData[0].description}
//         rating={cardsData[0].rating}
//         thumbnail={cardsData[0].thumbnail}
//       />
//     );

//     expect(screen.getByText(cardsData[0].title)).toBeInTheDocument();
//     expect(screen.getByText(cardsData[0].brand)).toBeInTheDocument();
//     expect(screen.getByText(cardsData[0].description)).toBeInTheDocument();
//   });

//   test('should render Cards', () => {
//     render(<Cards />);

//     const cards = screen.getAllByRole('card');
//     expect(cards).toHaveLength(cardsData.length);
//   });
// });
