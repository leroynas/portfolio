import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from '../components/layout/Layout';

const classes = {
  wrapper: `absolute inset-0 flex items-center justify-center bg-black`,
  container: `max-w-5xl mx-auto flex items-center`,
  title: `w-2/3 font-semibold text-6xl text-white leading-snug`,
  image: `w-1/3 ml-16`,
};

const IndexPage = () => (
  <Layout>
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.title}>
          Hi, I&apos;m Leroy.
          <br />A frontend developer.
        </h1>

        <StaticImage
          src="../images/leroy.jpg"
          className={classes.image}
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
