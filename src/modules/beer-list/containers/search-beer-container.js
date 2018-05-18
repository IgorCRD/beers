import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';

import * as beerListActions from 'beer-list/actions/beer-list-actions';
import SearchBeer from 'beer-list/components/search-beer';

class SearchBeerContainer extends React.Component {
  static propTypes = {
    search: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  };

  state = {
    input: '',
  };

  componentDidMount() {
    const { filter } = this.props;
    return { input: filter };
  }

  onChangeHandler = (event) => {
    const { search } = this.props;
    const {
      target: { value },
    } = event;
    this.setState({ input: value }, () => {
      search(value);
    });
  };

  render() {
    const { input } = this.state;
    return <SearchBeer input={input} onChangeCallback={this.onChangeHandler} />;
  }
}

const mapStateToProps = ({ beerList: { filter } }) => ({
  filter,
});

const mapDispatchToProps = dispatch => ({
  search: debounce(searchString => dispatch(beerListActions.search(searchString)), 400),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBeerContainer);
