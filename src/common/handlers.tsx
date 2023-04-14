import { rest } from 'msw';
import { search, cards } from './data';

export const handlers = [
  rest.get('https://api.unsplash.com/search/photos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(search));
  }),
  rest.get('https://api.unsplash.com/photos', (req, res, ctx) => {
    return res(ctx.json(search), ctx.delay(150));
  }),
  rest.get('https://api.unsplash.com/photos/eOLpJytrbsQ', (req, res, ctx) => {
    return res(ctx.json(cards[0]), ctx.delay(150));
  }),
];
