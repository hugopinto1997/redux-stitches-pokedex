import { styled } from 'app/stitches.config';

import { fadeIn } from '../../styles/animations';

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '1.4rem',
  height: '7rem',
  backgroundColor: '$phillipineYellow',
  boxShadow: '0 2rem 6rem #00000030',
  '.header__logo': {
    outline: '0',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '1rem',
    fontSize: '$md',
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: '$black',
    transition: 'all .2s',
  },
  '@tabletPortrait': {
    flexWrap: 'wrap',
    height: '14rem',
    alignContent: 'space-around',
  },
});

export const Logo = styled('img', {
  height: '3.25rem',
  display: 'block',
});

export const SearchBox = styled('div', {
  animation: `${fadeIn} .5s ease`,
  color: '$black',
  flex: '0 0 60%',
  display: 'flex',
  justifySelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'text',
  position: 'relative',
  '.search-box__search-label': {
    zIndex: '5',
    cursor: 'text',
  },
  '.search-box__search-icon': {
    fill: '$black',
    width: '2rem',
    height: '2rem',
    border: 'none',
    outline: 'none',
  },
  '.search-box__search-input': {
    color: 'CurrentColor',
    borderRadius: '999px',
    marginLeft: '-3.25rem',
    fontFamily: 'inherit',
    paddingLeft: '3.75rem',
    fontSize: 'inherit',
    backgroundColor: 'white',
    width: '90%',
    transition: 'all .25s',
    '&:focus': {
      width: '100%',
    },
  },
  '@tabletPortrait': {
    justifyContent: 'center !important',
    paddingLeft: '1.25rem',
    margin: '0 auto',
    order: '1',
    flex: '0 0 95%',
  },
  variants: {
    visible: {
      true: {
        visibility: 'visible',
      },
      false: {
        visibility: 'none',
      },
    },
  },
  defaultVariants: {
    visible: 'true',
  },
});

export const Nav = styled('nav', {
  alignSelf: 'stretch',
  display: 'flex',
  alignItems: 'center',
  '& > *': {
    padding: '0 2rem',
    cursor: 'pointer',
    height: '100%',
  },
});

export const NavItem = styled('a', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '$md',
  letterSpacing: '1.2px',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: '$black',
  transition: 'all .5s ease',
  '&:hover': {
    backgroundColor: '$myrtleGreen',
    color: '#fff',
    textDecoration: 'underline',
  },
  '.nav-icon': {
    fill: 'CurrentColor',
    fontSize: 'inherit',
    marginRight: '$sm',
  },
});
