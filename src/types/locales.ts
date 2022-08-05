import * as muiCoreLocales from '@mui/material/locale';
import * as muiDataGridLocales from '@mui/x-data-grid/locales';
import * as muiDatePickerLocales from 'date-fns/locale';

export type MuiCoreSupportedLocales = keyof typeof muiCoreLocales;
export type MuiDataGridSupportedLocales = keyof typeof muiDataGridLocales;
export type MuiDatePickerSupportedLocales = keyof typeof muiDatePickerLocales;