import React from 'react';
import Header from 'core/components/header';
import BeerList from 'beer-list/containers/beer-list';
import { Flex } from 'grid-styled';

const Home = () => (
  <React.Fragment>
    <Header />
    <Flex justifyContent="center">
      <BeerList />
    </Flex>
  </React.Fragment>
);

export default Home;
