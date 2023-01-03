import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

// 1em = 16px

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  media: {
    phone: '(max-width: 20em)',
    tabletPortrait: '(max-width: 48em)',
    tabletLandscape: '(max-width: 64em)',
    laptop: '(max-width: 75em)',
    desktop: '(min-width: 90em)',
    bigDesktop: '(min-width: 160em)',
  },
  theme: {
    colors: {
      black: '#000000',
      darkBlue: '#0A285F',
      maximumRed: '#CE2211',
      vermilionRed: '#E54222',
      myrtleGreen: '#37796C',
      prussionBlue: '#0C3348',
      newCarBlue: '#1C4CBD',
      nyanzaGreen: '#EFFCD5',
      spiroBlue: '#16D6FB',
      gainsboro: '#DFDFDF',
      phillipineYellow: '#FFCB05',
    },
    space: {
      xxs: '0.2rem',
      xs: '0.4rem',
      sm: '0.8rem',
      rg: '1rem',
      md: '1.2rem',
      lg: '1.8rem',
      xl: '2.4rem',
      xxl: '3.2rem',
    },
    fontSizes: {
      xxs: '0.2rem',
      xs: '0.4rem',
      sm: '0.8rem',
      rg: '1rem',
      md: '1.2rem',
      lg: '1.8rem',
      xl: '2.4rem',
      xxl: '3.2rem',
    },
  },
  utils: {
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;
