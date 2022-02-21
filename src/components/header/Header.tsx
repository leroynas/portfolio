import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

interface HeaderProps {
  siteTitle: string;
}

const classes = {
  root: `bg-black px-2 py-6`,
  container: `max-w-5xl mx-auto`,
  title: `text-lg text-white`,
};

const Header: FunctionComponent<HeaderProps> = ({ siteTitle }) => (
  <header className={classes.root}>
    <div className={classes.container}>
      <Link to="/" className={classes.title}>
        {siteTitle}
      </Link>
    </div>
  </header>
);

export default Header;
