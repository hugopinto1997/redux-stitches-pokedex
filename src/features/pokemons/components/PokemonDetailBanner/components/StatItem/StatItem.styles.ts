import { styled } from 'app/stitches.config';

export const StatItemContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  color: '$black',
  fontSize: '1.4rem',
  position: 'relative',
  border: 'none',
  cursor: 'default',
  transition: 'all .5s ease',

  '&::before': {
    content: `""`,
    position: 'absolute',
    height: '100%',
    width: '4px',
    backgroundColor: '$maximumRed',
  },

  '&:hover': {
    boxShadow: '0 0.25rem 0.75rem #00000030',
  },
});

export const StatItemName = styled('div', {
  fontWeight: 'bold',
  marginRight: 'auto',
  padding: '0 $md',
});

export const StatItemValue = styled('div', {
  padding: '$sm',
  fontWeight: '300',
  fontStyle: 'italic',
});
