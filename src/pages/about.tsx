import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import data from '../../content/about.json';
import Container from '../components/common/container/Container';
import Heading, { HeadingSizes } from '../components/common/heading/Heading';
import Pane from '../components/common/pane/Pane';
import Stack from '../components/common/stack/Stack';
import Text, { TextSizes } from '../components/common/text/Text';
import Layout from '../components/layout/Layout';
import Skill from '../components/skill/Skill';

const className = {
  root: `flex items-start`,
  content: `w-2/3 text-lg`,
  aside: `ml-16 w-1/3`,
  title: `font-bold text-4xl`,
};

const IndexPage = () => (
  <Layout>
    <Container>
      <div className={className.root}>
        <div className={className.content}>
          <Heading size={HeadingSizes.Medium}>{data.about.title}</Heading>
          <Text size={TextSizes.Large}>{data.about.description}</Text>

          <Heading size={HeadingSizes.Small}>{data.impressive.title}</Heading>
          <Text size={TextSizes.Large}>{data.impressive.description}</Text>

          <Heading size={HeadingSizes.Small}>{data.education.title}</Heading>
          <Stack>
            {data.education.items.map((item) => (
              <Pane key={item.period} between>
                <div>
                  <Text size={TextSizes.Small} bold>
                    {item.title}
                  </Text>

                  <Text size={TextSizes.Small}>{item.name}</Text>
                </div>

                <Text size={TextSizes.Small} muted>
                  {item.period}
                </Text>
              </Pane>
            ))}
          </Stack>

          <Heading size={HeadingSizes.Small}>{data.certificates.title}</Heading>
          <Stack>
            {data.certificates.items.map((certificate) => (
              <Pane key={certificate.period} between>
                <div>
                  <Text size={TextSizes.Small} bold>
                    {certificate.title}
                  </Text>

                  <Text size={TextSizes.Small}>{certificate.provider}</Text>
                </div>

                <Text size={TextSizes.Small} muted>
                  {certificate.period}
                </Text>
              </Pane>
            ))}
          </Stack>

          <Heading size={HeadingSizes.Small}>{data.hobbies.title}</Heading>
          <Text size={TextSizes.Large}>{data.hobbies.description}</Text>
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

          <Heading size={HeadingSizes.Small}>{data.languages.title}</Heading>
          <Stack>
            {data.languages.items.map((language) => (
              <Skill
                key={language.title}
                title={language.title}
                alpha={language.alpha}
              />
            ))}
          </Stack>

          <Heading size={HeadingSizes.Small}>{data.libraries.title}</Heading>
          <Stack>
            {data.libraries.items.map((language) => (
              <Skill
                key={language.title}
                title={language.title}
                alpha={language.alpha}
              />
            ))}
          </Stack>
        </aside>
      </div>
    </Container>
  </Layout>
);

export default IndexPage;
