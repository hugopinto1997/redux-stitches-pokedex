import { styled } from 'app/stitches.config';

export const PaginationContainer = styled('div', {
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.4rem',
});

export const BreakLabel = styled('span', {
  letterSpacing: '1.25px',
  lineHeight: '1',
  margin: '0 $xs',
  fontWeight: '500',
  fontSize: '$rg',
  cursor: 'default',
});
