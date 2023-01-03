import { styled } from 'app/stitches.config';

export const Heading = styled('h1', {
  fontWeight: '300',
  textTransform: 'uppercase',
  letterSpacing: '1px',

  variants: {
    size: {
      small: {
        fontSize: '$lg',
        padding: '1rem 2rem',
        '@phone': {
          fontSize: '$rg',
          padding: '0.5rem 1rem',
        },
      },
      medium: {
        fontSize: '$xl',
        padding: '1.5rem 3rem',
        '@phone': {
          fontSize: '$lg',
          padding: '1rem 2rem',
        },
      },
      large: {
        fontSize: '$xxl',
        padding: '2rem 4rem',
        '@phone': {
          fontSize: '$xl',
          padding: '1.5rem 3rem',
        },
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export const Heading2 = styled('h2', {
  fontWeight: '300',
  textTransform: 'uppercase',
  letterSpacing: '1px',

  variants: {
    size: {
      small: {
        fontSize: '$rg',
        padding: '0.5rem 1rem',
        '@phone': {
          fontSize: '$md',
          padding: '0.25rem 0.5rem',
        },
      },
      medium: {
        fontSize: '$lg',
        padding: '1rem 2rem',
        '@phone': {
          fontSize: '$rg',
          padding: '0.5rem 1rem',
        },
      },
      large: {
        fontSize: '$xl',
        padding: '1.5rem 3rem',
        '@phone': {
          fontSize: '$lg',
          padding: '1rem 2rem',
        },
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
