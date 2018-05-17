import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';

import * as beerListActions from 'beer-list/actions/beer-list-actions';
import SearchBeer from 'beer-list/components/search-beer';

class SearchBeerContainer extends React.Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    loadPage: PropTypes.func.isRequired,
  };

  state = {
    input: '',
  };

  componentDidMount() {
    const { filter } = this.props;
    this.setState({ input: filter });
  }

  onChangeHandler = (event) => {
    this.setState({ input: event.target.value });
    const { page, itemsPerPage, loadPage } = this.props;
    loadPage(itemsPerPage, page, event.target.value);
  };

  render() {
    const { input } = this.state;
    return <SearchBeer input={input} onChangeCallback={this.onChangeHandler} />;
  }
}

const mapStateToProps = ({ beerList: { page, filter, itemsPerPage } }) => ({
  page,
  filter,
  itemsPerPage,
});

const mapDispatchToProps = dispatch => ({
  loadPage: debounce(beerListActions.loadPage(dispatch), 300),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBeerContainer);
