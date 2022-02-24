import './layout.css';

import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent, ReactNode } from 'react';

import Header from '../header/Header';
import useTheme, { Theme } from './useTheme';

interface LayoutProps {
  children: ReactNode;
}

const className = {
  root: `flex flex-col min-h-screen dark:bg-zinc-900`,
  main: `relative grow`,
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const themeState = useTheme();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Theme.Provider value={themeState}>
      <div className={themeState.theme}>
        <div className={className.root}>
          <Header siteTitle={data.site.siteMetadata?.title} />
          <main className={className.main}>{children}</main>
        </div>
      </div>
    </Theme.Provider>
  );
};

export default Layout;
