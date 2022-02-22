import React from 'react';

import Container from '../components/container/Container';
import Heading, { HeadingSizes } from '../components/heading/Heading';
import Layout from '../components/layout/Layout';
import Pane from '../components/pane/Pane';
import Stack from '../components/stack/Stack';
import Text from '../components/text/Text';
import Timeline from '../components/timeline/Timeline';
import TimelineItem from '../components/timeline/TimelineItem';

const experiences = [
  {
    title: 'Lead Frontend Engineer',
    period: '2021-2022',
    company: '4net',
    skills: [
      'Researched the project requirements and designed the system around these requirements. Made a time estimation on how long the project would take and presented everything to the business.',
      'Developed an application where radio newsreaders can organize news in newsfeeds. The application had functionality to search for news, save a news query as a newsfeed, change user settings, clip articles and create newsletters.',
      'Trained software engineers that were new to Vue and Typescript. Did a lot of code reviews and peer programming to ensure a high quality of the product.',
    ],
    stack: [
      'JavaScript',
      'TypeScript',
      'Vue.js',
      'HTML',
      'CSS',
      'REST APIs',
      'YARN',
      'NPM',
      'UI Design',
      'UX Design',
      'Vuex',
      'Azure DevOps',
      'Azure DevOps Services',
      'Continuous Integration (CI)',
      'Continuous Delivery (CD)',
      'Agile',
      'Agile Software Development',
      'Software System Architecture Development',
      'MacOS',
      'Visual Studio Code',
      'Microsoft Teams',
    ],
  },
  {
    title: 'Senior Frontend Engineer',
    period: '2020-2021',
    company: '50five',
    skills: [
      'Developed an app (react) that acts as a cloud-hosted page builder (Storyblok CMS). The frontend was statically generated with gatsby, this way the app was blazingly fast. The app also had a form builder with custom API integrations.',
      'Researched the best possible headless CMS systems and frontend frameworks to create a page builder and form builder that was requested by the company.',
      'Developed new functionality for the Magento 2 web store and maintained already existing functionality. Improved Continuous Integration scripts. All new features and bugs were tracked using Jira.',
    ],
    stack: [
      'JavaScript',
      'React',
      'GatsbyJS',
      'HTML',
      'CSS',
      'REST APIs',
      'GraphQL',
      'PHP',
      'Magento 2',
      'Continuous Integration (CI)',
      'Continuous Delivery (CD)',
      'Storyblok CMS',
      'Grunt',
      'YARN',
      'Yarn Workspaces',
      'Lerna',
      'TypeScript',
      'Jira',
      'Agile',
      'Scrum',
      'Leadership Development',
      'React Hooks',
      'Formik',
      'Software System Architecture Development',
      'Agile Software Development',
      'MacOS',
      'Visual Studio Code',
      'Microsoft Teams',
    ],
  },
  {
    title: 'Medior Full-Stack Engineer',
    period: '2019-2020',
    company: 'Cart2Quote',
    skills: [
      'Developed a Magneto 2 module that replaces the Magento 2 checkout (loads in 10-13s), with a web app (react) to fully replace the Magento checkout. All requests were processed via a middleware (node) to cache results. The app loaded in 3s.',
      'Developed a Magento 2 module named Cart2Quote, which adds quotation functionality to Magento. Added new functionality to the module and fixed bugs.',
      'Developed multiple Magento 2 web stores, set up new stores, and worked on existing ones. Set up continuous deployments with Capistrano (rust). Added functionality in both frontend and backend.',
    ],
    stack: [
      'JavaScript',
      'Magento 2',
      'PHP',
      'Node.js',
      'HTML',
      'CSS',
      'React',
      'GatsbyJS',
      'REST APIs',
      'Grunt',
      'NPM',
      'Yarn Workspaces',
      'YARN',
      'Continuous Integration (CI)',
      'Continuous Delivery (CD)',
      'Capistrano',
      'Rust',
      'jQuery',
      'GraphQL',
      'Leadership Development',
      'React Hooks',
      'Software System Architecture Development',
      'Agile Software Development',
      'MacOS',
      'Visual Studio Code',
      'Slack',
    ],
  },
  {
    title: 'Full-Stack Engineer',
    period: '2017-2019',
    company: 'Cybox',
    skills: [
      'Developed an app (react-native) that displays the local events, ordered by date. The app also has a featured functionality that only shows all featured events and had a map view where all events were displayed with flags.',
      'Developed a web app (vue) for ordering fodder (cattle food). This app was mostly used by non-technical people (farmers), so the UX had to be very clean. This app was built with a complicated API integration that was providing data and sends orders.',
      'Talked with multiple companies to figure out their needs and then carefully designed a system that would fit. Also advised companies on improvements on already existing projects.',
    ],
    stack: [
      'JavaScript',
      'React',
      'Vue.js',
      'Node.js',
      'Laravel',
      'HTML',
      'CSS',
      'Model View Controller (MVC)',
      'Expo',
      'React Native',
      'Redux',
      'Redux-saga',
      'NativeScript-Vue',
      'REST APIs',
      'MariaDB',
      'NPM',
      'YARN',
      'jQuery',
      'MacOS',
      'Visual Studio Code',
    ],
  },
];

const IndexPage = () => (
  <Layout>
    <Container>
      <Heading size={HeadingSizes.Medium}>Work experience</Heading>

      <Timeline>
        {experiences.map((experience) => (
          <TimelineItem
            key={experience.company}
            title={experience.title}
            meta={`${experience.company} · ${experience.period}`}
          >
            <Stack>
              {experience.skills.map((skill) => (
                <Pane key={skill}>
                  <Text>{skill}</Text>
                </Pane>
              ))}

              <Text muted>Stack: {experience.stack.join(', ')}</Text>
            </Stack>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  </Layout>
);

export default IndexPage;
