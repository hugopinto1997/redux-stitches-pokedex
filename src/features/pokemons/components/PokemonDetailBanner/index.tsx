import { useMemo, useState } from 'react';

import { PAGE_LIMIT } from 'app/constants';
import Pokeball from 'assets/images/pokeball.png';
import Pagination from 'components/Pagination';
import { Box, Grid } from 'components/ui/container';
import { Heading } from 'components/ui/typography';
import type { PokemonMove, PokemonType } from 'features/pokemons/types/pokemon';
import { usePaginationController } from 'hooks/usePaginationController';
import { calcEvenLimit } from 'utils/pagination';

import MoveItem from './components/MoveItem';
import NamedSection from './components/NamedSection';
import StatItem from './components/StatItem';
import {
  ContentContainer,
  ImageContainer,
  PokemonDetailConteiner,
  PokemonImage,
  TypeSpan,
} from './PokemonDetailBanner.styles';
import { removeStringDashes } from 'utils/textFormatting';

type PokemonDetailBannerProps = {
  name: string;
  types: PokemonType[];
  stats: {
    attack: number;
    defense: number;
    hp: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  moves: PokemonMove[];
  image?: string;
  secondaryImage?: string;
} & typeof defaultProps;

const defaultProps = { image: Pokeball, secondaryImage: Pokeball };

const PokemonDetailBanner = ({
  image,
  secondaryImage,
  moves,
  name,
  stats,
  types,
}: PokemonDetailBannerProps) => {
  const [movesPage, setMovesPage] = useState({
    start: 0,
    end: calcEvenLimit(PAGE_LIMIT),
  });
  const { currentPage, handlePageChange, pageCount } = usePaginationController({
    count: moves.length,
    limit: calcEvenLimit(PAGE_LIMIT),
    onPageChange: (newOffset) => {
      const start = newOffset;
      const end = start + calcEvenLimit(PAGE_LIMIT);
      // eslint-disable-next-line no-console
      console.log(start, end, moves);
      setMovesPage((prevState) => ({ ...prevState, start, end }));
    },
  });
  const { attack, defense, hp, specialAttack, specialDefense, speed } = stats;
  const currentMoves = useMemo(
    () => moves.slice(movesPage.start, movesPage.end),
    [moves, movesPage],
  );

  return (
    <PokemonDetailConteiner>
      <ImageContainer>
        <PokemonImage alt="name" src={image || Pokeball} />
      </ImageContainer>
      <ContentContainer>
        <Heading className="title" size="large">
          {name}
        </Heading>
        <NamedSection title="Types">
          <Box display="flex" flexWrap="wrap" css={{ gap: '$sm' }}>
            {types.map(({ type, slot }) => (
              <TypeSpan key={`type-${slot}-${type.name}`}>{type.name}</TypeSpan>
            ))}
          </Box>
        </NamedSection>
        <NamedSection title="Stats">
          <Box
            display="grid"
            css={{
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '$md',

              '@tabletPortrait': {
                gridTemplateColumns: '1fr',
              },
            }}
          >
            <StatItem stat="HP" value={hp} />
            <StatItem stat="Attack" value={attack} />
            <StatItem stat="Defense" value={defense} />
            <StatItem stat="Special Attack" value={specialAttack} />
            <StatItem stat="Special Defense" value={specialDefense} />
            <StatItem stat="Speed" value={speed} />
          </Box>
        </NamedSection>
        <NamedSection title="Moves">
          <Grid
            gap="$xs"
            itemWidth="15rem"
            css={{
              '@tabletPortrait': {
                gridTemplateColumns: '1fr',
              },
            }}
          >
            {currentMoves.map(({ move: { name: moveName } }) => (
              <MoveItem
                key={`move-${moveName}`}
                moveIcon={secondaryImage}
                move={removeStringDashes(moveName)}
              />
            ))}
          </Grid>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="$rg"
          >
            <Pagination
              pageCount={pageCount}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </Box>
        </NamedSection>
      </ContentContainer>
    </PokemonDetailConteiner>
  );
};

PokemonDetailBanner.defaultProps = defaultProps;
export default PokemonDetailBanner;
