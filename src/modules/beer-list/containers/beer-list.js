import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Box, Flex } from 'grid-styled';

import * as beerListActions from 'beer-list/actions/beer-list-actions';
import punkApi from 'core/api/punk-api-wrapper';
import Beer from 'beer-list/components/beer';
import { FoldingCube } from 'styled-spinkit';
import ErrorCard from 'core/components/error-card';

class BeerList extends React.Component {
  static propTypes = {
    loadPage: PropTypes.func.isRequired,
    beers: PropTypes.arrayOf(PropTypes.shape(punkApi.beerShape())).isRequired,
    loadingState: PropTypes.oneOf(['initial', 'loading', 'success', 'fail']).isRequired,
    errorMsg: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
  };

  componentDidMount() {
    const {
      loadPage, page, itemsPerPage, filter,
    } = this.props;
    loadPage(itemsPerPage, page, filter);
  }

  onClickRetry = () => {
    const {
      loadPage, page, itemsPerPage, filter,
    } = this.props;
    loadPage(itemsPerPage, page, filter);
  };

  render() {
    const { beers, loadingState, errorMsg } = this.props;

    switch (loadingState) {
      case 'success': {
        return (
          <Flex
            is="ul"
            width={[1, 3 / 4, 2 / 3]}
            flexDirection="column"
            alignItems="center"
            style={{ listStyle: 'none' }}
            p="0px"
          >
            {beers &&
              beers.map(beer => (
                <Box is="li" p="1em" key={beer.id} width="100%">
                  <Beer
                    name={beer.name}
                    tagline={beer.tagline}
                    image={beer.image_url}
                    abv={beer.abv}
                    volume={beer.volume.value}
                    volumeUnit={beer.volume.unit}
                    showMoreButtonCallback={() => {
                      // eslint-disable-next-line no-console
                      console.log('show more button callback');
                    }}
                  />
                </Box>
              ))}
          </Flex>
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
        return (
          <Box width={[3 / 4, 2 / 4, 3 / 8]} p="30px">
            <ErrorCard errorMsg={errorMsg} buttonCallback={this.onClickRetry} />
          </Box>
        );
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
  errorMsg: beerList.errorMsg,
});

const mapDispatchToProps = dispatch => ({
  loadPage: beerListActions.loadPage(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
