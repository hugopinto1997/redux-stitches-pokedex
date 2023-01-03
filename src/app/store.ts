/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';

import pokemonsReducer from '../features/pokemons/slice/pokemonsSlice';

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
