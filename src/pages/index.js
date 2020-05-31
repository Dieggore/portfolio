import React, { PureComponent } from 'react';
import Layout from '../layout';
import ScrollableHero from '../components/Heroes/ScrollableHero';
import About from '../components/About';


const IndexPage = () => (
  <Layout>
    <ScrollableHero />
    <About />
  </Layout>
);

export default IndexPage;
