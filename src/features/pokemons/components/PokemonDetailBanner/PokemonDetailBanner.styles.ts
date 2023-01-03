import { fadeIn } from './../../../../styles/animations';
import { styled } from 'app/stitches.config';

export const PokemonDetailConteiner = styled('div', {
  display: 'flex',

  '@tabletPortrait': {
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
});

export const ImageContainer = styled('div', {
  flex: '0 0 40%',
  borderRadius: '1rem',
  boxShadow: '0 2rem 6rem #00000030',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
  alignSelf: 'start',
  backgroundColor: 'white',
  padding: '$xl',
  overflow: 'hidden',
  '@tabletPortrait': {
    flex: '1',
  },
});

export const PokemonImage = styled('img', {
  width: '100%',
  animation: `${fadeIn} 1s ease`,
  transition: 'all .5s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

export const ContentContainer = styled('div', {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  gap: '$xl',
  padding: '2rem 4rem',
  '.title': {
    fontWeight: 'bold',
    padding: '0',
    marginBottom: '$sm',
  },

  '@tabletPortrait': {
    padding: '2rem 0',
  },
});

export const TypeSpan = styled('span', {
  cursor: 'default',
  color: '$maximumRed',
  padding: '4px $lg',
  borderRadius: '999px',
  border: '1px solid $maximumRed',
  fontWeight: 'bold',
  letterSpacing: '1px',
  textTransform: 'uppercase',
});
