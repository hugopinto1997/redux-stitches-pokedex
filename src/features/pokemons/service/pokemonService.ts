import { AxiosResponse } from 'axios';

import ApiService from 'app/api/base/apiService';
import type { PaginationArgs } from 'types/pagination';

import type { Pokemon } from '../types/pokemon';
import type { APIResponse, NamedAPIResource } from '../types/pokemonService';

export default class PokemonService extends ApiService {
  constructor() {
    super(null, '/pokemon');
  }

  getAllPokemons({
    offset,
    limit,
  }: Partial<Pick<PaginationArgs, 'offset' | 'limit'>>): Promise<
    AxiosResponse<APIResponse<NamedAPIResource>>
  > {
    return this.request<APIResponse<NamedAPIResource>>({
      url: `/`,
      method: 'GET',
      params: {
        offset,
        limit,
      },
    });
  }

  getPokemonByName(name: string): Promise<AxiosResponse<Pokemon>> {
    return this.request<Pokemon>({
      url: `/${name}`,
      method: 'GET',
    });
  }
}
