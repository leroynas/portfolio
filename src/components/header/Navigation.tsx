import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

const className = {
  root: `flex gap-4 text-white`,
  link: `text-md text-white hover:underline decoration-4 decoration-blue-500 underline-offset-4`,
  activeLink: `underline`,
};

const items = [
  { to: '/about', title: 'About' },
  { to: '/education', title: 'Education' },
  { to: '/work-experience', title: 'Work experience' },
  { to: '/cases', title: 'Cases' },
];

const Navigation: FunctionComponent = () => (
  <nav className={className.root}>
    {items.map((item) => (
      <Link
        key={item.to}
        to={item.to}
        className={className.link}
        activeClassName={className.activeLink}
      >
        {item.title}
      </Link>
    ))}
  </nav>
);

export default Navigation;