import React from 'react';
import Header from 'core/components/header';
import BeerList from 'beer-list/containers/beer-list';

const Home = () => (
  <React.Fragment>
    <Header />
    <BeerList />
  </React.Fragment>
);

export default Home;
