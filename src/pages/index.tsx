import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import data from '../../content/index.json';
import Typewriter from '../components/animations/Typewriter';
import Heading, { HeadingSizes } from '../components/common/heading/Heading';
import IconButton, {
  IconButtonSizes,
  IconButtonVariants,
} from '../components/common/iconButton/IconButton';
import Layout from '../components/layout/Layout';
import Seo from '../components/seo/Seo';

const className = {
  wrapper: `absolute inset-0 flex items-center justify-center bg-zinc-900`,
  container: `max-w-5xl w-full mx-auto flex justify-between items-center`,
  content: `w-2/3 text-white`,
  typewriter: `flex items-center gap-3`,
  image: `w-1/3 ml-16 border-8 border-white`,
  next: `absolute bottom-24`,
};

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="Home" />

    <div className={className.wrapper}>
      <div className={className.container}>
        <div className={className.content}>
          <div>
            <Heading size={HeadingSizes.Large} mono>
              {data.title}
            </Heading>
          </div>

          <div>
            <Heading
              className={className.typewriter}
              size={HeadingSizes.Large}
              mono
            >
              A <Typewriter key="a" words={data.skills} />
            </Heading>
          </div>
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
