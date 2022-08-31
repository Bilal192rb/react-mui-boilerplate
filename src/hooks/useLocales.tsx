import { useTranslation } from 'react-i18next';
import {
  MuiCoreSupportedLocales,
  MuiDataGridSupportedLocales,
  MuiDatePickerSupportedLocales,
} from '../types/locales';

const LANGS: Array<{
  label: string;
  value: string;
  systemValue: {
    muiCoreLocale: MuiCoreSupportedLocales;
    muiDataGridLocale: MuiDataGridSupportedLocales;
    muiDatePickerLocale: MuiDatePickerSupportedLocales;
  };
  direction: 'ltr' | 'rtl';
  icon: string;
}> = [
  {
    label: 'English',
    value: 'en',
    systemValue: {
      muiCoreLocale: 'enUS',
      muiDataGridLocale: 'enUS',
      muiDatePickerLocale: 'enUS',
    },
    direction: 'ltr',
    icon: '',
  },
  {
    label: 'Urdu',
    value: 'ur',
    systemValue: {
      muiCoreLocale: 'enUS',
      muiDataGridLocale: 'enUS',
      muiDatePickerLocale: 'enUS',
    },
    direction: 'rtl',
    icon: '',
  },
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const langStorage = localStorage.getItem('i18nextLng');
  const currentLang = LANGS.find((_lang) => _lang.value === langStorage) || LANGS[1];

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
  };
}
