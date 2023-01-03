import { styled } from 'app/stitches.config';

import { fadeIn } from '../../../../../../styles/animations';

export const MoveItemIcon = styled('img', {
  backfaceVisibility: 'hidden',
  display: 'block',
  height: '8rem',
  objectFit: 'cover',
  marginBottom: '$sm',
  '@tabletPortrait': {
    marginBottom: '$md',
  },
});

export const MoveItemContainer = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  borderRadius: '8px',
  padding: '3rem 2rem',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: '1.4rem',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontFamily: 'inherit',
  color: 'white',
  backgroundColor: '$darkBlue',
  transition: 'all .5s linear',
  cursor: 'default',
  position: 'relative',
  animation: `${fadeIn} 1500ms ease`,

  '&::before': {
    transition: 'all 0.5s ease',
    content: `""`,
    width: '100%',
    height: '100%',
    position: 'absolute',
    linearGradient: 'to right bottom, #ffffff20, transparent 60%',
    filter: 'blur(10px)',
    opacity: '0',
  },

  '&:hover': {
    transform: 'scale(1.025)',
    '&::before': {
      opacity: '1',
    },
  },

  '@tabletPortrait': {
    fontSize: '$lg',
    padding: '3rem 6rem',
  },
});
