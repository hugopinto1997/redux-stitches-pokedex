import { PropsWithChildren } from 'react';

import { styled, config } from 'app/stitches.config';
import type { CSS } from 'app/stitches.config';

type GridProps = {
  responsive?: boolean;
  itemWidth: string;
  gap: `$${keyof typeof config.theme.space}`;
  css?: CSS;
} & PropsWithChildren &
  typeof defaultProps;

const defaultProps = { responsive: false, css: {} };

const StyledGrid = styled('div', {
  display: 'grid',
});

export const Grid = ({
  css,
  children,
  gap,
  itemWidth,
  responsive,
}: GridProps) => {
  return (
    <StyledGrid
      css={{
        gridTemplateColumns: `repeat(${
          responsive ? 'auto-fit' : 'auto-fill'
        }, minmax(${itemWidth}, 1fr))`,
        gridColumnGap: `${gap}`,
        gridRowGap: `${gap}`,
        ...css,
      }}
    >
      {children}
    </StyledGrid>
  );
};

Grid.defaultProps = defaultProps;
