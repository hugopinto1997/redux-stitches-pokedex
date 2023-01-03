import { styled } from 'app/stitches.config';
import { fadeIn } from 'styles/animations';

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  borderBottomLeftRadius: '1rem',
  borderBottomRightRadius: '1rem',
  borderTopLeftRadius: '2.5rem',
  borderTopRightRadius: '2.5rem',
  gridRow: '1/2',
  alignSelf: 'end',
  gridColumn: '1/-1',
  zIndex: '3',
  height: '90%',
  backgroundColor: 'white',
  color: '$black',
  transition: 'all .25s ease',
  transform: 'translateY(100%)',
});

export const ContentTitle = styled('h1', {
  margin: '0 auto',
  textAlign: 'center',
  padding: '1.25rem',
  borderBottomLeftRadius: '1rem',
  borderBottomRightRadius: '1rem',
  backgroundColor: '$maximumRed',
  fontSize: '1.6rem',
  fontWeight: 'lighter',
  letterSpacing: '1.2px',
  color: 'white',
  width: '100%',
  textTransform: 'uppercase',
  zIndex: '3',
});

export const ContentDescription = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridRowGap: '4px',
  marginTop: 'auto',
  marginBottom: 'auto',
  '.item': {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '$md',
    fontSize: '$md',
    '@tabletPortrait': {
      fontSize: '$lg',
    },
    '&__title': {
      fontWeight: 'bold',
    },
    '&__description': {
      fontSize: '$lg',
      fontStyle: 'italic',
      fontWeight: '200',
      '@tabletPortrait': {
        fontSize: '$xl',
      },
    },
  },
});

export const ContentActions = styled('div', {
  padding: '1rem 1.2rem',
  objectFit: 'contain',
});

export const Card = styled('div', {
  overflow: 'hidden',
  backgroundColor: 'white',
  animation: `${fadeIn} 1500ms ease`,
  borderRadius: '1rem',
  boxShadow: '0 2rem 6rem #00000030',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '3.5rem',
  position: 'relative',
  transition: 'all 5s linear',
  '&:hover': {
    [`& ${Content}`]: {
      transform: 'translateY(0%)',
    },
  },
});

export const Image = styled('img', {
  gridColumn: '1/-1',
  gridRow: '1/2',
  width: '100%',
  padding: '$sm',
  zIndex: '1',
});

export const Title = styled('h1', {
  gridColumn: '1/-1',
  textAlign: 'center',
  padding: '1.25rem',
  borderBottomLeftRadius: '1rem',
  borderBottomRightRadius: '1rem',
  backgroundColor: '$maximumRed',
  fontSize: '1.6rem',
  fontWeight: 'lighter',
  letterSpacing: '1.2px',
  color: '#fff',
  width: '100%',
  justifySelf: 'center',
  gridRow: '1/2',
  zIndex: '3',
  alignSelf: 'end',
  textTransform: 'uppercase',
});
