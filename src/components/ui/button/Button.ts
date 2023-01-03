import { styled } from 'app/stitches.config';

export const Button = styled('button', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'auto',
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  fontWeight: '700',
  letterSpacing: '1.25px',
  textTransform: 'uppercase',
  textDecoration: 'none',
  height: 'auto',
  boxShadow: '0 1rem 6rem #00000030',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$maximumRed',
        color: 'white',
      },
      secondary: {
        backgroundColor: 'transparent',
        border: '1px solid $maximumRed',
        color: '$maximumRed',
      },
    },
    size: {
      small: {
        padding: '$xs $sm',
      },
      medium: {
        padding: '$rg',
      },
      large: {
        padding: '$md $xxl',
      },
    },
    rounded: {
      small: {
        borderRadius: '4px',
      },
      medium: {
        borderRadius: '8px',
      },
      large: {
        borderRadius: '8px',
      },
      full: {
        borderRadius: '999px',
      },
    },
    width: {
      auto: {
        width: 'max-content',
      },
      full: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'small',
    rounded: 'small',
    width: 'full',
  },
});
