import React from 'react';
import { Flex } from 'grid-styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as beerListActions from 'beer-list/actions/beer-list-actions';
import Pagination from 'core/components/pagination';

class BeerListPaginationContainer extends React.Component {
  static propTypes = {
    nextPage: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired,
  };

  scrollToTop = (onTopCallback) => {
    const pos = document.documentElement.scrollTop || document.body.scrollTop;
    if (pos > 0) {
      const step = pos / 8;
      window.scrollTo(0, pos - step);
      window.requestAnimationFrame(() => this.scrollToTop(onTopCallback));
    } else {
      onTopCallback();
    }
  };

  handleNextPage = () => {
    const { nextPage } = this.props;
    this.scrollToTop(nextPage);
  };

  handlePreviousPage = () => {
    const { previousPage } = this.props;
    this.scrollToTop(previousPage);
  };

  render() {
    return (
      <Flex width={[1, 3 / 4, 2 / 3]} p="1em">
        <Pagination nextCallback={this.handleNextPage} previousCallback={this.handlePreviousPage} />
      </Flex>
    );
  }
}

const mapDispatchToProps = {
  nextPage: beerListActions.nextPage,
  previousPage: beerListActions.previousPage,
};

export default connect(null, mapDispatchToProps)(BeerListPaginationContainer);
