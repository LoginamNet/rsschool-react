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
      state.value.cards.push({
        name: action.payload.name,
        date: action.payload.date,
        checked: action.payload.check,
        selected: action.payload.select,
        radio: action.payload.radio,
        text: action.payload.text,
        file: URL.createObjectURL(action.payload.file[0]),
      });
    },
    setModalOpen: (state) => {
      state.value.isModalOpen = true;
    },
    setModalClose: (state) => {
      state.value.isModalOpen = false;
    },
  },
});

export const { setCards, setModalOpen, setModalClose } = formSlice.actions;
