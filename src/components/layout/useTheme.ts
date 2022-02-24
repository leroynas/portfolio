import './layout.css';

import React, { useCallback, useMemo, useState } from 'react';

export enum ThemeModes {
  Light = 'light',
  Dark = 'dark',
}

interface ThemeState {
  theme: ThemeModes;
  switchTheme(): void;
}

const getInitialTheme = () => {
  const dark =
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  return dark ? ThemeModes.Dark : ThemeModes.Light;
};

export const Theme = React.createContext<ThemeState | undefined>(undefined);

const useTheme = (): ThemeState => {
  const localState = useMemo(getInitialTheme, []);
  const [theme, setTheme] = useState<ThemeModes>(localState);

  const switchTheme = useCallback(() => {
    if (theme === ThemeModes.Light) {
      setTheme(ThemeModes.Dark);
      localStorage.theme = ThemeModes.Dark;
    } else {
      setTheme(ThemeModes.Light);
      localStorage.theme = ThemeModes.Light;
    }
  }, [theme]);

  const themeState = useMemo(
    () => ({ theme, switchTheme }),
    [theme, switchTheme]
  );

  return themeState;
};

export default useTheme;
