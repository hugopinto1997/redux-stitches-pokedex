import { NamedAPIResource } from './pokemonService';

export type PokemonAbility = {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
};

export type PokemonMove = {
  move: NamedAPIResource;
};

export type PokemonSprite = {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
  other: {
    'official-artwork': Pick<PokemonSprite, 'front_default'>;
    dream_world: Pick<PokemonSprite, 'front_default'>;
  };
};

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
};

export type PokemonType = {
  slot: number;
  type: NamedAPIResource;
};

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  moves: PokemonMove[];
  sprites: PokemonSprite;
  species: NamedAPIResource[];
  stats: PokemonStat[];
  types: PokemonType[];
};
