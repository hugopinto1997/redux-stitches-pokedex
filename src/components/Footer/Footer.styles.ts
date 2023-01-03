import { styled } from 'app/stitches.config';

export const FooterContainer = styled('footer', {
  backgroundColor: '$maximumRed',
  color: 'white',
  letterSpacing: '1px',
  fontSize: '1.4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '4rem',
  textAlign: 'center',
});

export const Logo = styled('img', {
  display: 'block',
  height: '6rem',
  marginBottom: '2rem',
});

export const MediaLink = styled('a', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.8rem',
  letterSpacing: '1.2px',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: 'white',
  marginRight: '$xl',
  padding: '$rg $lg',
  textUnderlineOffset: '4px',

  '&:last-of-type': {
    marginRight: '0',
  },

  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
  },

  '.media-link__media-icon': {
    fill: 'CurrentColor',
    fontSize: '3.2rem',
    marginRight: '$sm',
  },

  '@tabletPortrait': {
    display: 'flex',
    justifyContent: 'start',
    marginRight: '0',
    marginBottom: '$sm',

    '&:last-of-type': {
      marginBottom: '0',
    },
  },
});
