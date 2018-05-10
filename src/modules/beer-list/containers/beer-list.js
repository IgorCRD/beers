import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Box, Flex } from 'grid-styled';

import * as beerListActions from 'beer-list/actions/beer-list-actions';
import punkApi from 'core/api/punk-api-wrapper';
import Beer from 'beer-list/components/beer';
import { StyledFlexList } from 'beer-list/components/beer-list-styles';
import { FoldingCube } from 'styled-spinkit';

class BeerList extends React.Component {
  static propTypes = {
    loadPage: PropTypes.func.isRequired,
    beers: PropTypes.arrayOf(PropTypes.shape(punkApi.beerShape())).isRequired,
    loadingState: PropTypes.oneOf(['initial', 'loading', 'success', 'fail']).isRequired,
    page: PropTypes.number.isRequired,
    filter: PropTypes.string,
    itemsPerPage: PropTypes.number.isRequired,
  };

  static defaultProps = {
    filter: null,
  };

  componentDidMount() {
    const {
      loadPage, page, itemsPerPage, filter,
    } = this.props;
    loadPage(itemsPerPage, page, filter);
  }

  render() {
    const { beers, loadingState } = this.props;
    switch (loadingState) {
      case 'success': {
        return (
          <StyledFlexList
            is="ul"
            width={[1, 3 / 4, 2 / 3]}
            flexDirection="column"
            alignItems="center"
          >
            {beers &&
              beers.map(beer => (
                <Box is="li" p="1em" key={beer.id}>
                  <Beer
                    name={beer.name}
                    tagline={beer.tagline}
                    image={beer.image_url}
                    abv={beer.abv}
                    volume={beer.volume.value}
                    volumeUnit={beer.volume.unit}
                  />
                </Box>
              ))}
          </StyledFlexList>
        );
      }
      case 'loading': {
        return (
          <Flex pt="3em">
            <FoldingCube />
          </Flex>
        );
      }
      case 'fail': {
        return <h1>Something went wrong</h1>;
      }
      default:
        return null;
    }
  }
}

const mapStateToProps = ({ beerList }) => ({
  beers: beerList.beers,
  loadingState: beerList.loadingState,
  page: beerList.page,
  filter: beerList.filter,
  itemsPerPage: beerList.itemsPerPage,
});

const mapDispatchToProps = dispatch => ({
  loadPage: beerListActions.loadPage(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
