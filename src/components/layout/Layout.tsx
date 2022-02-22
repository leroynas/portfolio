import './layout.css';

import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent, ReactNode } from 'react';

import Header from '../header/Header';

interface LayoutProps {
  children: ReactNode;
}

const className = {
  root: `flex flex-col min-h-screen`,
  main: `relative grow`,
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
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
    <div className={className.root}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className={className.main}>{children}</main>
    </div>
  );
};

export default Layout;
