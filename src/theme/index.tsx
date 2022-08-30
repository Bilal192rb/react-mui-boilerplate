import PropTypes, { InferProps } from 'prop-types';
import { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';
import { Any } from '../types';

const ThemeProviderPropTypes = {
  children: PropTypes.node,
};

type ThemeProviderTypes = InferProps<typeof ThemeProviderPropTypes>;

function ThemeProvider({ children }: ThemeProviderTypes) {
  const { themeMode, themeDirection } = { themeMode: 'light', themeDirection: 'ltr' };
  const isLight = themeMode === 'light';

  const themeOptions: Any = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

ThemeProvider.propTypes = ThemeProviderPropTypes;

export default ThemeProvider;
