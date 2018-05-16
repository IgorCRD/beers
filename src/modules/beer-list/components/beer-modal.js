import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as punkApi from 'core/api/punk-api';

const FullShadow = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

class BeerModal extends React.Component {
  static propTypes = {
    beer: PropTypes.shape(punkApi.beerShape).isRequired,
    closeModalCallback: PropTypes.func.isRequired,
  };

  render() {
    const { beer, closeModalCallback } = this.props;
    return (
      <FullShadow onClick={closeModalCallback}>
        <h1
          ref={(ref) => {
            this.ref = ref;
          }}
          style={{ backgroundColor: 'white' }}
        >
          {beer.name}
        </h1>
      </FullShadow>
    );
  }
}

export default BeerModal;
