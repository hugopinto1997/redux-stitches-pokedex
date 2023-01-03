import { styled } from 'app/stitches.config';

export const Container = styled('div', {
  maxWidth: '120rem',
  minHeight: '50rem',
  margin: '8rem auto',
  backgroundColor: '$gainsboro',
  '@laptop': {
    margin: '0',
    maxWidth: '100%',
    width: '100%',
  },
});

export const ContentContainer = styled('div', {
  display: 'flex',
  minHeight: '43rem',
  '@tabletPortrait': {
    minHeight: '34rem',
  },
});

export const MainContainer = styled('main', {
  position: 'relative',
  flex: '1',
});
