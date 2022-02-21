import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from '../components/layout/Layout';

const className = {
  container: `max-w-5xl mx-auto flex  py-16`,
  content: `w-2/3 text-gray-900 text-lg`,
  title: `font-bold text-4xl`,
  image: `w-1/3 ml-16`,
};

const IndexPage = () => (
  <Layout>
    <div className={className.container}>
      <div className={className.content}>
        <h1 className={className.title}>Hi, I&apos;m Leroy.</h1>
      </div>

      <StaticImage
        src="../images/leroy.jpg"
        className={className.image}
        width={400}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt="Leroy Nas"
      />
    </div>
  </Layout>
);

export default IndexPage;
