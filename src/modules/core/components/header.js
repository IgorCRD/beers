import React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import beerTopImg from 'assets/images/beer-passion.jpg';

const BeerImage = styled.img`
  object-fit: contain;
  object-position: top right;
  height: 40vh;
`;

const BlackFlex = styled(Flex)`
  background-color: black;
`;

const BeerLoversFlex = styled(Flex)`
  position: absolute;
  color: white;
  mix-blend-mode: difference;
`;

const StyledH1 = styled.h1`
  font-size: 3.45em;
  margin: 0px;
`;

const StyledH3 = styled.h3`
  margin: 0px;
`;

const Header = () => (
  <BlackFlex flexDirection="column" justifyContent="center">
    <BeerLoversFlex
      p={3}
      width={[1, 1 / 2]}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      <StyledH1>Beer Lovers</StyledH1>
      <Box flex="1 1 100%" />
      <StyledH3>Let{"'"}s find the perfect one for you</StyledH3>
    </BeerLoversFlex>
    <Flex justifyContent="flex-end">
      <BeerImage src={beerTopImg} alt="glass full with delicious beer" />
    </Flex>
  </BlackFlex>
);

export default Header;
