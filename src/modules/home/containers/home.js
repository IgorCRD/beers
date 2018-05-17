import React from 'react';
import { Flex } from 'grid-styled';

import Header from 'core/components/header';
import BeerListContainer from 'beer-list/containers/beer-list-container';
import BeerModalContainer from 'beer-list/containers/beer-modal-container';
import SearchBeerContainer from 'beer-list/containers/search-beer-container';

const Home = () => (
  <React.Fragment>
    <Header />
    <Flex is="section" justifyContent="center" mt="-2.5em">
      <SearchBeerContainer />
    </Flex>
    <Flex is="section" justifyContent="center">
      <BeerListContainer />
    </Flex>
    <BeerModalContainer />
  </React.Fragment>
);

export default Home;
