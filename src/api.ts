import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ACCESS_KEY } from 'common/keys';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.unsplash.com/search/photos' }),
  endpoints: (builder) => ({
    getCards: builder.query({
      query: (search) => `?page=1&per_page=15&query=${search}&client_id=${ACCESS_KEY}`,
    }),
  }),
});

export const { useGetCardsQuery } = apiSlice;
