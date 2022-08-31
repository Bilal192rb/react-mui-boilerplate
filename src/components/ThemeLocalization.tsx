import PropTypes, { InferProps } from 'prop-types';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import * as muiCoreLocales from '@mui/material/locale';
import * as muiDataGridLocales from '@mui/x-data-grid/locales';
import * as muiDatePickerLocales from 'date-fns/locale';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useMemo } from 'react';
import useLocales from '../hooks/useLocales';

const ThemeLocalizationPropTypes = {
  children: PropTypes.node,
};

type ThemeLocalizationTypes = InferProps<typeof ThemeLocalizationPropTypes>;
function ThemeLocalization({ children }: ThemeLocalizationTypes) {
  const defaultTheme = useTheme();
  const { currentLang } = useLocales();

  const themeWithLocale = useMemo(
    () =>
      createTheme(
        defaultTheme,
        muiCoreLocales[currentLang.systemValue.muiCoreLocale],
        muiDataGridLocales[currentLang.systemValue.muiDataGridLocale]
      ),
    [currentLang.systemValue, defaultTheme]
  );

  return (
    <ThemeProvider theme={themeWithLocale}>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        locale={muiDatePickerLocales[currentLang.systemValue.muiDatePickerLocale]}
      >
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  );
}

ThemeLocalization.propTypes = ThemeLocalizationPropTypes;

export default ThemeLocalization;
