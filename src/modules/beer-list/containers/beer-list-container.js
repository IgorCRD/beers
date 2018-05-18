import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Box, Flex } from 'grid-styled';
import { FoldingCube } from 'styled-spinkit';

import * as beerListActions from 'beer-list/actions/beer-list-actions';
import BeerList from 'beer-list/components/beer-list';
import * as punkApi from 'core/api/punk-api';
import ErrorCard from 'core/components/error-card';

class BeerListContainer extends React.Component {
  static propTypes = {
    loadPage: PropTypes.func.isRequired,
    beers: PropTypes.arrayOf(PropTypes.shape(punkApi.beerShape)).isRequired,
    loadingState: PropTypes.oneOf(['initial', 'loading', 'success', 'fail']).isRequired,
    errorMsg: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    openBeerDetails: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {
      loadPage, page, itemsPerPage, filter,
    } = this.props;
    loadPage(itemsPerPage, page, filter);
  }

  componentDidUpdate(prevProps) {
    const { page, filter } = this.props;
    const { page: prevPage, filter: prevFilter } = prevProps;

    if (page === prevPage && filter === prevFilter) {
      return;
    }

    const { loadPage, itemsPerPage } = this.props;
    loadPage(itemsPerPage, page, filter);
  }

  onClickRetry = () => {
    const {
      loadPage, page, itemsPerPage, filter,
    } = this.props;
    loadPage(itemsPerPage, page, filter);
  };

  onClickShowMore = (id) => {
    const { openBeerDetails } = this.props;
    openBeerDetails(id);
  };

  render() {
    const { beers, loadingState, errorMsg } = this.props;

    switch (loadingState) {
      case 'success':
        return <BeerList beers={beers} showMoreCallback={this.onClickShowMore} />;
      case 'loading': {
        return (
          <Flex pt="3em" style={{ height: '100vh' }}>
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
      case 'initial':
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
  openBeerDetails: id => dispatch(beerListActions.openBeerDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerListContainer);
