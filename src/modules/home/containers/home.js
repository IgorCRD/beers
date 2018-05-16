import React from 'react';
import { Flex } from 'grid-styled';

import Header from 'core/components/header';
import BeerListContainer from 'beer-list/containers/beer-list-container';
import BeerModalContainer from 'beer-list/containers/beer-modal-container';

const Home = () => (
  <React.Fragment>
    <Header />
    <BeerModalContainer />
    <Flex justifyContent="center">
      <BeerListContainer />
    </Flex>
  </React.Fragment>
);

export default Home;
