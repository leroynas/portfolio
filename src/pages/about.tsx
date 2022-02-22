import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Container from '../components/common/container/Container';
import Heading, { HeadingSizes } from '../components/common/heading/Heading';
import Stack from '../components/common/stack/Stack';
import Text, { TextSizes } from '../components/common/text/Text';
import Layout from '../components/layout/Layout';
import Skill from '../components/skill/Skill';

const languages = [
  {
    title: 'HTML',
    alpha: 1,
  },
  {
    title: 'CSS',
    alpha: 1,
  },
  {
    title: 'Javascript',
    alpha: 0.8,
  },
  {
    title: 'Typescript',
    alpha: 0.8,
  },
  {
    title: 'PHP',
    alpha: 0.5,
  },
];

const libraries = [
  {
    title: 'React',
    alpha: 0.9,
  },
  {
    title: 'Gatsby',
    alpha: 0.9,
  },
  {
    title: 'Vue',
    alpha: 0.8,
  },
  {
    title: 'Redux',
    alpha: 0.7,
  },
  {
    title: 'Node',
    alpha: 0.7,
  },
];

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

          <Heading size={HeadingSizes.Small}>Languages</Heading>

          <Stack>
            {languages.map((language) => (
              <Skill
                key={language.title}
                title={language.title}
                alpha={language.alpha}
              />
            ))}
          </Stack>

          <Heading size={HeadingSizes.Small}>Libraries</Heading>

          <Stack>
            {libraries.map((library) => (
              <Skill
                key={library.title}
                title={library.title}
                alpha={library.alpha}
              />
            ))}
          </Stack>
        </aside>
      </div>
    </Container>
  </Layout>
);

export default IndexPage;
