import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

import useMeta from './useMeta';

interface SeoProps {
  title: string;
  description: string;
}

const Seo: FunctionComponent<SeoProps> = ({ title, description }) => {
  const meta = useMeta();

  return (
    <Helmet>
      <html lang="en" />

      <title>
        {title} | {meta.title}
      </title>

      <meta charSet="utf-8" />
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Seo;
