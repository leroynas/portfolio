import React from 'react';

import data from '../../content/cases.json';
import Container from '../components/common/container/Container';
import Heading, { HeadingSizes } from '../components/common/heading/Heading';
import Layout from '../components/layout/Layout';

const IndexPage = () => (
  <Layout>
    <Container>
      <Heading size={HeadingSizes.Medium}>{data.title}</Heading>
    </Container>
  </Layout>
);

export default IndexPage;
