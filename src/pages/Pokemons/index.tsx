import { useEffect } from 'react';

import ComponentLoader from 'components/ComponentLoader';
import EmptyFallback from 'components/EmptyFallback';
import Pagination from 'components/Pagination';
import { Box, Grid, Section } from 'components/ui/container';
import PokemonCard from 'features/pokemons/components/PokemonCard';
import {
  getAllPokemonsThunk,
  getPokemonByNameThunk,
} from 'features/pokemons/slice/pokemonsReducers';
import { allPokemonsSelector } from 'features/pokemons/slice/pokemonsSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { usePaginationController } from 'hooks/usePaginationController';
import { useSearchFilters } from 'hooks/useSearchFilters';
import { getPage } from 'utils/pagination';

const Pokemons = () => {
  const {
    pokemonsCount: count,
    pokemonList: pokemons,
    isLoading,
  } = useAppSelector(allPokemonsSelector);
  const dispatch = useAppDispatch();
  const [params, setParams] = useSearchFilters();
  const { currentPage, handlePageChange, pageCount } = usePaginationController({
    count,
    defaultPage: getPage({
      count,
      limit: params.limit,
      offset: params.offset,
    }),
    limit: params.limit,
    onPageChange: (newOffset) => {
      setParams((prev) => ({
        ...prev,
        offset: newOffset,
        search: undefined,
      }));
    },
  });

  useEffect(() => {
    const textToSearch = params.search || '';
    if (textToSearch.length) {
      dispatch(
        getPokemonByNameThunk({
          search: textToSearch,
        }),
      );
    } else {
      dispatch(
        getAllPokemonsThunk({
          offset: params.offset,
          limit: params.limit,
        }),
      );
    }
  }, [params.limit, params.offset, params.search]);

  return (
    <Section variant="page">
      <ComponentLoader
        isLoading={isLoading}
        shouldRenderEmpty={!isLoading && !pokemons.length}
        emptyFallback={<EmptyFallback />}
      >
        <Grid gap="$xxl" itemWidth="25rem">
          {pokemons.map(({ id, sprites, name, stats }) => (
            <PokemonCard
              key={id}
              image={sprites?.front_default}
              name={name}
              stats={{
                attack: stats[1]?.base_stat,
                defense: stats[2]?.base_stat,
                hp: stats[0]?.base_stat,
                specialAttack: stats[3]?.base_stat,
                specialDefense: stats[4]?.base_stat,
                speed: stats[5].base_stat,
              }}
            />
          ))}
        </Grid>
      </ComponentLoader>
      {pokemons.length > 0 && !params.search && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="$xxl"
        >
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            pageCount={pageCount}
          />
        </Box>
      )}
    </Section>
  );
};

export default Pokemons;
