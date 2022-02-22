import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';

import Navigation from './Navigation';

interface HeaderProps {
  siteTitle: string;
}

const className = {
  root: `bg-zinc-900`,
  container: `max-w-5xl mx-auto px-8 py-6 flex justify-between`,
  title: `text-lg font-bold text-white`,
};

const Header: FunctionComponent<HeaderProps> = ({ siteTitle }) => (
  <header className={className.root}>
    <div className={className.container}>
      <Link to="/" className={className.title}>
        {siteTitle}
      </Link>

      <Navigation />
    </div>
  </header>
);

export default Header;
