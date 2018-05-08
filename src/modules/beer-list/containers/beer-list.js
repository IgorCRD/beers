import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as beerListActions from 'beer-list/actions/beer-list-actions';
import punkApi from 'core/api/punk-api-wrapper';
import Beer from 'beer-list/components/beer';

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
          <ul>
            {beers &&
              beers.map(beer => (
                <li key={beer.id}>
                  {// eslint-disable-next-line no-console
                  console.log(beer)}
                  <Beer
                    name={beer.name}
                    tagline={beer.tagline}
                    image={beer.image_url}
                    abv={beer.abv}
                  />
                </li>
              ))}
          </ul>
        );
      }
      case 'loading': {
        return <h1>Loading</h1>;
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
