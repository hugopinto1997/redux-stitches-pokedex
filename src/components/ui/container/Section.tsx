import { styled } from 'app/stitches.config';

export const Section = styled('section', {
  flex: '1',
  variants: {
    variant: {
      fullSize: {
        padding: '0',
      },
      page: {
        padding: '$xxl',
      },
      mainContent: {
        padding: '$rg',
      },
      secondaryContent: {
        padding: '$sm',
      },
    },
  },
  defaultVariants: {
    variant: 'content',
  },
});
