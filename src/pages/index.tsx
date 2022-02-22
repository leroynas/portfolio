import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Heading, { HeadingSizes } from '../components/heading/Heading';
import IconButton, {
  IconButtonSizes,
  IconButtonVariants,
} from '../components/iconButton/IconButton';
import Layout from '../components/layout/Layout';

const className = {
  wrapper: `absolute inset-0 flex items-center justify-center bg-gray-900`,
  container: `max-w-5xl mx-auto flex items-center`,
  title: `w-2/3 text-white`,
  image: `w-1/3 ml-16`,
  next: `absolute bottom-24`,
};

const IndexPage = () => (
  <Layout>
    <div className={className.wrapper}>
      <div className={className.container}>
        <Heading className={className.title} size={HeadingSizes.Large}>
          Hi, I&apos;m Leroy.
          <br />A frontend developer.
        </Heading>

        <StaticImage
          src="../images/leroy.jpg"
          className={className.image}
          width={400}
          quality={95}
          formats={['auto', 'webp', 'avif']}
          alt="Leroy Nas"
        />
      </div>

      <IconButton
        className={className.next}
        to="/about"
        variant={IconButtonVariants.ArrowDown}
        size={IconButtonSizes.Large}
        bounce
      />
    </div>
  </Layout>
);

export default IndexPage;
