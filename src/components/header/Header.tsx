import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Navigation from './Navigation';

interface HeaderProps {
  siteTitle: string;
}

const className = {
  root: `bg-black px-2 py-6`,
  container: `max-w-5xl mx-auto flex justify-between`,
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
