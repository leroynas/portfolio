import React, { ReactNode, FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header/Header';
import './layout.css';

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
