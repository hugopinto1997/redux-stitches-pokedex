import { styled } from 'app/stitches.config';

import { fadeIn } from '../../styles/animations';

export const EmptyFallbackContainer = styled('div', {
  animation: `${fadeIn} .5s ease`,
  color: '$black',
  display: 'flex',
  alignSelf: 'stretch',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '$lg',
  textAlign: 'center',
  minHeight: '75vh',
});

export const FallbackImage = styled('img', {
  width: '50%',
  marginBottom: '$xl',
});
