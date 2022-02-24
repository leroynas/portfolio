import { Link } from 'gatsby';
import React, { FunctionComponent, useContext, useMemo } from 'react';

import IconButton, {
  IconButtonSizes,
  IconButtonVariants,
} from '../common/iconButton/IconButton';
import { Theme, ThemeModes } from '../layout/useTheme';
import Navigation from './Navigation';

interface HeaderProps {
  siteTitle: string;
}

const className = {
  root: `bg-zinc-900`,
  container: `max-w-5xl mx-auto px-8 py-6 flex justify-between`,
  title: `text-lg font-bold text-white`,
  actions: `flex gap-8 items-center`,
};

const Header: FunctionComponent<HeaderProps> = ({ siteTitle }) => {
  const themeState = useContext(Theme);

  const icon = useMemo(
    () =>
      themeState?.theme === ThemeModes.Dark
        ? IconButtonVariants.LightMode
        : IconButtonVariants.DarkMode,
    [themeState?.theme]
  );

  return (
    <header className={className.root}>
      <div className={className.container}>
        <Link to="/" className={className.title}>
          {siteTitle}
        </Link>

        <div className={className.actions}>
          <Navigation />

          <IconButton
            onClick={themeState?.switchTheme}
            size={IconButtonSizes.Small}
            variant={icon}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
