import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-cycle
import { RootState } from 'app/store';

import type { Pokemon } from '../types/pokemon';
import {
  getAllPokemonsThunk,
  getPokemonByNameThunk,
  getPokemonDetailThunk,
} from './pokemonsReducers';

type State = {
  pokemonsCount: number;
  pokemonList: Pokemon[];
  isLoading: boolean;
  pokemonDetail: {
    pokemon: Pokemon;
    isLoading: boolean;
    isError: boolean;
  };
};

const initialState: State = {
  pokemonsCount: 0,
  pokemonList: [],
  isLoading: false,
  pokemonDetail: {
    isLoading: false,
    isError: false,
    pokemon: {
      abilities: [],
      base_experience: 0,
      forms: [],
      height: 0,
      id: 0,
      is_default: false,
      moves: [],
      name: '',
      order: 0,
      species: [],
      sprites: {
        back_default: '',
        back_female: '',
        back_shiny: '',
        back_shiny_female: '',
        front_default: '',
        front_female: '',
        front_shiny: '',
        front_shiny_female: '',
        other: {
          'official-artwork': {
            front_default: '',
          },
          dream_world: {
            front_default: '',
          },
        },
      },
      stats: [],
      types: [],
      weight: 0,
    },
  },
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPokemonsThunk.pending, (state: State) => {
      state.isLoading = true;
    });
    builder.addCase(getAllPokemonsThunk.fulfilled, (state: State, action) => {
      const { count, pokemonList } = action.payload;
      state.pokemonsCount = count;
      state.pokemonList = pokemonList;
      state.isLoading = false;
    });
    builder.addCase(getAllPokemonsThunk.rejected, (state: State) => {
      state.isLoading = false;
      state.pokemonList = [];
    });
    builder.addCase(getPokemonByNameThunk.pending, (state: State) => {
      state.isLoading = true;
    });
    builder.addCase(getPokemonByNameThunk.fulfilled, (state: State, action) => {
      const { count, pokemonList } = action.payload;
      state.pokemonsCount = count;
      state.pokemonList = pokemonList;
      state.isLoading = false;
    });
    builder.addCase(getPokemonByNameThunk.rejected, (state: State) => {
      state.isLoading = false;
      state.pokemonList = [];
    });
    builder.addCase(getPokemonDetailThunk.pending, (state: State) => {
      state.pokemonDetail.isLoading = true;
    });
    builder.addCase(getPokemonDetailThunk.fulfilled, (state: State, action) => {
      const pokemon = action.payload;
      state.pokemonDetail.pokemon = pokemon;
      state.pokemonDetail.isLoading = false;
    });
    builder.addCase(getPokemonDetailThunk.rejected, (state: State) => {
      state.pokemonDetail.isLoading = false;
      state.pokemonDetail.isError = true;
      state.pokemonDetail.pokemon = initialState.pokemonDetail.pokemon;
    });
  },
});

export const allPokemonsSelector = ({ pokemons }: RootState) => pokemons;
export const pokemonDetailSelector = ({ pokemons }: RootState) =>
  pokemons.pokemonDetail;

export default pokemonsSlice.reducer;
