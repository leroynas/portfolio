import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Container from '../components/container/Container';
import Heading, { HeadingSizes } from '../components/heading/Heading';
import Layout from '../components/layout/Layout';

const className = {
  content: `w-2/3 text-gray-900 text-lg`,
  title: `font-bold text-4xl`,
  image: `w-1/3 ml-16`,
};

const IndexPage = () => (
  <Layout>
    <Container>
      <div className={className.content}>
        <Heading size={HeadingSizes.Medium}>Hi, I&apos;m Leroy.</Heading>
      </div>

      <StaticImage
        src="../images/leroy.jpg"
        className={className.image}
        width={400}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt="Leroy Nas"
      />
    </Container>
  </Layout>
);

export default IndexPage;
