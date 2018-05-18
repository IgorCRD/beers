import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import Modal from 'core/components/modal';
import * as punkApi from 'core/api/punk-api';

const BeerName = styled.h3`
  color: rgb(247, 134, 44);
  font-family: 'Helvetica', 'Arial';
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 2px;
  font-size: 2em;
  margin-top: 0px;
  text-align: center;
`;

const BeerImage = styled.img`
  height: 100%;
  min-width: 50%;
  object-fit: contain;
`;

const BeerImageWrapper = styled(Flex)`
  height: 60vh;
`;

const ModalContent = styled(Flex)`
  overflow-y: auto;
`;

const BeerModal = ({ beer, closeModalCallback }) => (
  <Modal closeModalCallback={closeModalCallback}>
    <ModalContent
      p="1em"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width={[1]}
    >
      <BeerName>{beer.name.toUpperCase()}</BeerName>
      <Flex justifyContent="space-around" width={[1]} flexWrap="wrap">
        <BeerImageWrapper flex="1 1 50%" justifyContent="center">
          <BeerImage src={beer.image_url} alt="selected beer" />
        </BeerImageWrapper>
        <Flex flexDirection="column" alignItems="center" flex="1 1 50%">
          {/* eslint-disable-next-line */}
          {JSON.stringify(
            Object.entries(beer.ingredients).reduce((allTypes, item) => {
              const current = typeof item[1] === 'string' ? [item[1]] : item[1];
              return [...allTypes, ...current];
            }, []))}
          <h1>bla</h1>
          <h1>bla</h1>
          <h1>bla</h1>
          <h1>bla</h1>
        </Flex>
      </Flex>
    </ModalContent>
  </Modal>
);

BeerModal.propTypes = {
  beer: PropTypes.shape(punkApi.beerShape).isRequired,
  closeModalCallback: PropTypes.func.isRequired,
};

export default BeerModal;
