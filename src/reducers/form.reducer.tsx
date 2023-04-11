import { createSlice } from '@reduxjs/toolkit';

export type FormCard = {
  name: string;
  date: string;
  checked: boolean;
  selected: string;
  radio: string;
  text: string;
  file: string | false;
};

export const formSlice = createSlice({
  name: 'cards',
  initialState: { value: { cards: [] as FormCard[], isModalOpen: false } },
  reducers: {
    setCards: (state, action) => {
      state.value.cards.push(action.payload);
    },
    setModal: (state, action) => {
      state.value.isModalOpen = action.payload;
    },
  },
});

export const { setCards, setModal } = formSlice.actions;
