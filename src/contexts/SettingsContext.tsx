import PropTypes, { InferProps } from 'prop-types';
import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import getColorPresets, { colorPresets } from '../utils/getColorPresets';

export const defaultSettings = {
  themeMode: 'light',
  themeColorPresets: 'default',
};

export type ThemeMode = 'light' | 'dark' | 'auto';

const initialState = {
  ...defaultSettings,
  onChangeMode: (mode: ThemeMode) => {},
  onChangeColor: (color: string) => {},
  onResetSetting: () => {},
  setColor: getColorPresets('default'),
  colorOption: [],
};

const SettingsContext = createContext(initialState);

const SettingProviderPropTypes = {
  children: PropTypes.node.isRequired,
};

type SettingProviderTypes = InferProps<typeof SettingProviderPropTypes>;

function SettingsProvider({ children }: SettingProviderTypes) {
  const [settings, setSettings] = useLocalStorage('settings', {
    themeMode: initialState.themeMode,
    themeColorPresets: initialState.themeColorPresets,
  });

  const onChangeMode = (mode: ThemeMode) => {
    setSettings({
      ...settings,
      themeMode: mode,
    });
  };

  const onChangeColor = (color: string) => {
    setSettings({
      ...settings,
      themeColorPresets: color,
    });
  };

  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
      themeColorPresets: initialState.themeColorPresets,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onChangeMode,
        onChangeColor,
        setColor: getColorPresets(settings.themeColorPresets),
        colorOption: colorPresets.map((color) => ({
          name: color.name,
          value: color.main,
        })),
        onResetSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

SettingsProvider.propTypes = SettingProviderPropTypes;

export { SettingsProvider, SettingsContext };
