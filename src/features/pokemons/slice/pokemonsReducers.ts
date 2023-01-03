import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import PokemonService from '../service/pokemon-service';
import { Pokemon } from '../types/pokemon';
import { pokemonActions } from './pokemonsActionTypes';

const pokemonService = new PokemonService();

export const getAllPokemonsThunk = createAsyncThunk(
  pokemonActions.GET_ALL_POKEMONS_THUNK,
  async (
    args: {
      offset: number | undefined;
      limit: number | undefined;
    },
    thunkApi,
  ) => {
    try {
      const { data: pokemonsList } = await pokemonService.getAllPokemons({
        ...args,
      });

      const mappedPromisesByName = pokemonsList.results.map(
        ({ name }: Pokemon) => pokemonService.getPokemonByName(name),
      );
      const triggeredPromises = await Promise.allSettled(mappedPromisesByName);
      const mapPromiseToArray = (
        triggeredPromises as PromiseFulfilledResult<AxiosResponse<Pokemon>>[]
      ).map(({ value }) => value.data);
      return { count: pokemonsList.count, pokemonList: mapPromiseToArray };
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const getPokemonByNameThunk = createAsyncThunk(
  pokemonActions.GET_POKEMON_BY_NAME_THUNK,
  async (
    args: {
      search?: string;
    },
    thunkApi,
  ) => {
    try {
      const { data: pokemon } = await pokemonService.getPokemonByName(
        args.search || '',
      );
      return { count: 1, pokemonList: [pokemon] };
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const getPokemonDetailThunk = createAsyncThunk(
  pokemonActions.GET_POKEMON_DETAIL_THUNK,
  async (args: { search?: string }, thunkApi) => {
    try {
      const { data: pokemon } = await pokemonService.getPokemonByName(
        args.search || '',
      );
      if (!pokemon) {
        throw new Error('No pokemon found');
      }
      return pokemon;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
