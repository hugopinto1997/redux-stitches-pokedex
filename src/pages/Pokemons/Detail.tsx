import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import ComponentLoader from 'components/ComponentLoader';
import EmptyFallback from 'components/EmptyFallback';
import { Section } from 'components/ui/container';
import PokemonDetailBanner from 'features/pokemons/components/PokemonDetailBanner';
import { getPokemonDetailThunk } from 'features/pokemons/slice/pokemonsReducers';
import { pokemonDetailSelector } from 'features/pokemons/slice/pokemonsSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';

const PokemonDetail = () => {
  const { name: searchedName } = useParams<{ name: string }>();
  const dispatch = useAppDispatch();
  const { pokemon, isError, isLoading } = useAppSelector(pokemonDetailSelector);
  const { moves, sprites, name, stats, types } = pokemon;

  useEffect(() => {
    dispatch(getPokemonDetailThunk({ search: searchedName }));
  }, [searchedName]);

  return (
    <Section variant="page">
      <ComponentLoader
        isLoading={isLoading}
        emptyFallback={<EmptyFallback />}
        shouldRenderEmpty={isError}
      >
        <PokemonDetailBanner
          image={sprites?.other['official-artwork'].front_default}
          secondaryImage={sprites?.front_default}
          name={name}
          types={types}
          stats={{
            attack: stats[1]?.base_stat,
            defense: stats[2]?.base_stat,
            hp: stats[0]?.base_stat,
            specialAttack: stats[3]?.base_stat,
            specialDefense: stats[4]?.base_stat,
            speed: stats[5]?.base_stat,
          }}
          moves={moves}
        />
      </ComponentLoader>
    </Section>
  );
};

export default PokemonDetail;
