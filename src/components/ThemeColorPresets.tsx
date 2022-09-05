import PropTypes, { InferProps } from 'prop-types';
import { useMemo } from 'react';
import { alpha, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import useSettings from '../hooks/useSettings';
import componentsOverride from '../theme/overrides';
import { Any } from '../types';

const ThemeColorPresetsPropTypes = {
  children: PropTypes.node,
};

type ThemeColorPresetsTypes = InferProps<typeof ThemeColorPresetsPropTypes>;

function ThemeColorPresets({ children }: ThemeColorPresetsTypes) {
  const defaultTheme: Any = useTheme();
  const { setColor }: Any = useSettings();

  const themeOptions = useMemo(
    () => ({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        primary: setColor,
      },
      customShadows: {
        ...defaultTheme.customShadows,
        primary: `0 8px 16px 0 ${alpha(setColor.main, 0.24)}`,
      },
    }),
    [setColor, defaultTheme]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

ThemeColorPresets.propTypes = ThemeColorPresetsPropTypes;

export default ThemeColorPresets;
