import { styled } from 'app/stitches.config';

import { spin } from '../../styles/animations';

export const LoaderBackDrop = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#00000050',
  position: 'absolute',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
  zIndex: '9999',
  transition: 'all .5s ease',
  opacity: '0',
  backdropFilter: 'blur(10px)',
  '.loader': {
    backfaceVisibility: 'hidden',
    backgroundColor: 'white',
    width: '12rem',
    borderRadius: '50%',
    height: '12rem',
    '&--animated': {
      animation: `${spin} .25s ease-in infinite`,
    },
  },
  variants: {
    visible: {
      false: {
        opacity: '0',
      },
      true: {
        opacity: '1',
      },
    },
  },
  defaultVariants: {
    visible: 'false',
  },
});
