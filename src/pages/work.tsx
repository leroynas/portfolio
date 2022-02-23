import React from 'react';

import data from '../../content/work.json';
import Container from '../components/common/container/Container';
import Heading, { HeadingSizes } from '../components/common/heading/Heading';
import Pane from '../components/common/pane/Pane';
import Stack from '../components/common/stack/Stack';
import Text, { TextSizes } from '../components/common/text/Text';
import Layout from '../components/layout/Layout';
import Timeline from '../components/timeline/Timeline';
import TimelineItem from '../components/timeline/TimelineItem';

const IndexPage = () => (
  <Layout>
    <Container>
      <Heading size={HeadingSizes.Medium}>{data.title}</Heading>

      <Timeline>
        <TimelineItem
          title="Now"
          meta={new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
          })}
        />

        {data.items.map((experience) => (
          <TimelineItem
            key={experience.company}
            title={experience.title}
            meta={`${experience.company} · ${experience.period}`}
          >
            <Stack>
              {experience.skills.map((skill) => (
                <Pane key={skill}>
                  <Text size={TextSizes.Small}>{skill}</Text>
                </Pane>
              ))}

              <Text size={TextSizes.Small} muted>
                Stack: {experience.stack.join(', ')}
              </Text>
            </Stack>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  </Layout>
);

export default IndexPage;
