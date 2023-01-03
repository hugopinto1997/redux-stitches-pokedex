import { styled } from 'app/stitches.config';

export const PaginationButton = styled('button', {
  lineHeight: '1',
  borderRadius: '4px',
  display: 'inline-flex',
  textAlign: 'center',
  alignItems: 'center',
  border: 'none',
  padding: '$rg',
  margin: '0 $xs',
  fontWeight: '500',
  fontSize: 'inherit',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
  '&:focus': {
    outline: '0',
  },
  variants: {
    mode: {
      active: {
        backgroundColor: '$maximumRed',
        color: 'white',
      },
      inactive: {
        backgroundColor: 'transparent',
        color: '$black',
      },
    },
  },
  defaultVariants: {
    mode: 'inactive',
  },
});
