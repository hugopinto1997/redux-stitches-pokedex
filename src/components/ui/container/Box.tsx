import { PropsWithChildren } from 'react';

import { Property } from '@stitches/react/types/css';

import { styled, config } from 'app/stitches.config';
import type { CSS } from 'app/stitches.config';

type BoxProps = {
  display?: Property.Display;
  flexWrap?: Property.FlexWrap;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  marginTop?: `$${keyof typeof config.theme.space}` | '0';
  marginLeft?: `$${keyof typeof config.theme.space}` | '0';
  marginRight?: `$${keyof typeof config.theme.space}` | '0';
  marginBottom?: `$${keyof typeof config.theme.space}` | '0';
  paddingTop?: `$${keyof typeof config.theme.space}` | '0';
  paddingLeft?: `$${keyof typeof config.theme.space}` | '0';
  paddingRight?: `$${keyof typeof config.theme.space}` | '0';
  paddingBottom?: `$${keyof typeof config.theme.space}` | '0';
  width?: Property.Width;
  height?: Property.Height;
  css?: CSS;
} & PropsWithChildren &
  typeof defaultProps;

const defaultProps = {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  marginTop: '0',
  marginLeft: '0',
  marginRight: '0',
  marginBottom: '0',
  paddingTop: '0',
  paddingLeft: '0',
  paddingRight: '0',
  paddingBottom: '0',
  width: 'auto',
  height: 'auto',
  flexWrap: 'nowrap',
  css: {},
};

const StyledBox = styled('div', {
  width: '100%',
});

export const Box = ({ children, css, ...rest }: BoxProps) => {
  return (
    <StyledBox
      css={{
        ...rest,
        ...css,
      }}
    >
      {children}
    </StyledBox>
  );
};

Box.defaultProps = defaultProps;
