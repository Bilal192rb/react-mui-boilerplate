import { useEffect, useState } from 'react';
import useSettings from './useSettings';
import { Any } from '../types';

export default function useThemeModeSetting() {
  const { themeMode: themeModeSetting } = useSettings();

  const [themeMode, setThemeMode] = useState(themeModeSetting);

  useEffect(() => {
    if (themeModeSetting !== 'auto') setThemeMode(themeModeSetting);
  }, [themeModeSetting]);

  useEffect(() => {
    function handleStatusChange(event: Any) {
      if (themeModeSetting === 'auto') setThemeMode(event.matches ? 'dark' : 'light');
    }
    const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    handleStatusChange(darkThemeMediaQuery);
    darkThemeMediaQuery.addEventListener('change', handleStatusChange);
    return () => {
      darkThemeMediaQuery.removeEventListener('change', handleStatusChange);
    };
  }, [themeModeSetting]);

  return themeMode;
}
