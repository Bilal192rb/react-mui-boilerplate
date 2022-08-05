import PropTypes, { InferProps } from 'prop-types';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import * as muiCoreLocales from '@mui/material/locale';
import * as muiDataGridLocales from '@mui/x-data-grid/locales';
import * as muiDatePickerLocales from 'date-fns/locale';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  MuiCoreSupportedLocales,
  MuiDataGridSupportedLocales,
  MuiDatePickerSupportedLocales,
} from '../types/locales';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useMemo } from 'react';

const ThemeLocalizationPropTypes = {
  children: PropTypes.node,
};

type ThemeLocalizationTypes = InferProps<typeof ThemeLocalizationPropTypes>;
function ThemeLocalization({ children }: ThemeLocalizationTypes) {
  const defaultTheme = useTheme();

  const muiCoreLocale: MuiCoreSupportedLocales = 'enUS';
  const muiDataGridLocale: MuiDataGridSupportedLocales = 'enUS';
  const muiDatePickerLocale: MuiDatePickerSupportedLocales = 'enUS';

  const themeWithLocale = useMemo(
    () =>
      createTheme(
        defaultTheme,
        muiCoreLocales[muiCoreLocale],
        muiDataGridLocales[muiDataGridLocale]
      ),
    [muiCoreLocale, muiDataGridLocale, defaultTheme]
  );

  return (
    <ThemeProvider theme={themeWithLocale}>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        locale={muiDatePickerLocales[muiDatePickerLocale]}
      >
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  );
}

ThemeLocalization.propTypes = ThemeLocalizationPropTypes;

export default ThemeLocalization;
