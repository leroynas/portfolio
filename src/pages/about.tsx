import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Container from '../components/container/Container';
import Heading, { HeadingSizes } from '../components/heading/Heading';
import Layout from '../components/layout/Layout';
import Text, { TextSizes } from '../components/text/Text';

const className = {
  root: `flex items-start`,
  content: `w-2/3 text-gray-900 text-lg`,
  aside: `ml-16 w-1/3`,
  title: `font-bold text-4xl`,
};

const IndexPage = () => (
  <Layout>
    <Container>
      <div className={className.root}>
        <div className={className.content}>
          <Heading size={HeadingSizes.Medium}>Hi, I&apos;m Leroy.</Heading>

          <Text size={TextSizes.Large}>
            After graduating I directly started working at my last internship.
            This was a digital agency that gave me a lot of time and freedom to
            develop myself with new technologies and soft skills. I’ve been
            working for 5 years of different frontend projects (react/vue) and
            the occasional backend tasks. My javascript experience is
            extraordinary for the 5 years I’ve been working with it
            professionally.
          </Text>

          <Heading size={HeadingSizes.Small}>The most amazing</Heading>

          <Text size={TextSizes.Large}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            fuga asperiores voluptatem accusamus magnam voluptatum excepturi
            ipsum? Nesciunt aperiam possimus, deleniti maiores saepe impedit
            sint quam odit, maxime illo dignissimos!
          </Text>

          <Heading size={HeadingSizes.Small}>Education</Heading>

          <Text size={TextSizes.Large}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            fuga asperiores voluptatem accusamus magnam voluptatum excepturi
            ipsum? Nesciunt aperiam possimus, deleniti maiores saepe impedit
            sint quam odit, maxime illo dignissimos!
          </Text>

          <Heading size={HeadingSizes.Small}>Certification</Heading>

          <Text size={TextSizes.Large}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            fuga asperiores voluptatem accusamus magnam voluptatum excepturi
            ipsum? Nesciunt aperiam possimus, deleniti maiores saepe impedit
            sint quam odit, maxime illo dignissimos!
          </Text>

          <Heading size={HeadingSizes.Small}>Hobbies</Heading>

          <Text size={TextSizes.Large}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            fuga asperiores voluptatem accusamus magnam voluptatum excepturi
            ipsum? Nesciunt aperiam possimus, deleniti maiores saepe impedit
            sint quam odit, maxime illo dignissimos!
          </Text>
        </div>

        <aside className={className.aside}>
          <StaticImage
            src="../images/leroy.jpg"
            width={400}
            height={400}
            quality={95}
            formats={['auto', 'webp', 'avif']}
            alt="Leroy Nas"
          />

          <Heading size={HeadingSizes.Small}>Skills</Heading>
        </aside>
      </div>
    </Container>
  </Layout>
);

export default IndexPage;
