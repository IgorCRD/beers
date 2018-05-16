import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BeerModal from 'beer-list/components/beer-modal';
import * as punkApi from 'core/api/punk-api';
import * as beerListActions from 'beer-list/actions/beer-list-actions';

const BeerModalContainer = ({ beer, closeBeerDetails }) =>
  (beer ? <BeerModal beer={beer} closeModalCallback={closeBeerDetails} /> : null);

BeerModalContainer.propTypes = {
  beer: PropTypes.shape(punkApi.beerShape),
  closeBeerDetails: PropTypes.func.isRequired,
};

BeerModalContainer.defaultProps = {
  beer: undefined,
};

const mapStateToProps = ({ beerList: { beers, beerModal } }) => ({
  beer: beers.filter(beer => beer.id === beerModal)[0],
});

const mapDispatchToProps = { closeBeerDetails: beerListActions.closeBeerDetails };

export default connect(mapStateToProps, mapDispatchToProps)(BeerModalContainer);
