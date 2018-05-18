import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'grid-styled';

import * as punkApi from 'core/api/punk-api';
import Beer from 'beer-list/components/beer';

const BeerList = ({ beers, showMoreCallback }) => (
  <Flex width={[1, 3 / 4, 2 / 3]}>
    <Flex
      is="ul"
      width={[1]}
      flexDirection="column"
      alignItems="center"
      style={{ listStyle: 'none' }}
      p="0px"
      my="0px"
    >
      {beers &&
        beers.map(beer => (
          <Box is="li" p="1em" key={beer.id} width="100%">
            <Beer
              id={beer.id}
              name={beer.name}
              tagline={beer.tagline}
              image={beer.image_url}
              abv={beer.abv}
              volume={beer.volume.value}
              volumeUnit={beer.volume.unit}
              showMoreCallback={showMoreCallback}
            />
          </Box>
        ))}
    </Flex>
  </Flex>
);

BeerList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.shape(punkApi.beerShape)).isRequired,
  showMoreCallback: PropTypes.func.isRequired,
};

export default BeerList;
