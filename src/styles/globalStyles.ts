import { globalCss } from 'app/stitches.config';

export const globalCssSetup = globalCss({
  '@font-face': {
    fontFamily: 'Roboto',
    src: 'local("Roboto"), url("/src/assets/fonts/Roboto-Regular.woff") format("woff")',
  },
  '*': {
    boxSizing: `inherit`,
    margin: '0',
    padding: '0',
  },
  '*:after': { boxSizing: 'inherit' },
  '*:before': { boxSizing: 'inherit' },
  html: {
    boxSizing: 'border-box',
    fontSize: '62.5%',
    '@tabletLandscape': {
      fontSize: '50%',
    },
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    linearGradient: 'to right bottom, $darkBlue, $prussionBlue 75%',
    fontFamily: `'Roboto', sans-serif`,
    letterSpacing: 'normal',
    minHeight: '100vh',
  },
});
