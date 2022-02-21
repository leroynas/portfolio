import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from '../components/layout/Layout';

const className = {
  wrapper: `absolute inset-0 flex items-center justify-center bg-gray-900`,
  container: `max-w-5xl mx-auto flex items-center`,
  title: `w-2/3 font-semibold text-6xl text-white leading-snug`,
  image: `w-1/3 ml-16`,
};

const IndexPage = () => (
  <Layout>
    <div className={className.wrapper}>
      <div className={className.container}>
        <h1 className={className.title}>
          Hi, I&apos;m Leroy.
          <br />A frontend developer.
        </h1>

        <StaticImage
          src="../images/leroy.jpg"
          className={className.image}
          width={400}
          quality={95}
          formats={['auto', 'webp', 'avif']}
          alt="Leroy Nas"
        />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
