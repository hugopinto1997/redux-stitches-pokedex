import { keyframes } from 'app/stitches.config';

export const fadeIn = keyframes({
  '0%': {
    opacity: '0',
  },
  '100%': {
    opacity: '1',
  },
});

export const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});
