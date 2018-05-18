import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import Modal from 'core/components/modal';
import * as punkApi from 'core/api/punk-api';
import media from 'core/styles/media-breakpoints';

const BeerName = styled.h3`
  color: rgb(247, 134, 44);
  font-family: 'Helvetica', 'Arial';
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 2px;
  font-size: 2em;
  ${media.desktop`font-size: 2em`};
  ${media.tablet`font-size: 1.5em`};
  ${media.phone`font-size: 1em`};
  margin-top: 0px;
  margin-bottom: 5px;
  text-align: center;
`;

const Fields = styled.h4`
  color: rgb(247, 134, 44);
  font-family: 'Helvetica', 'Arial';
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 2px;
  font-size: 0.8em;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
  font-weight: lighter;
`;

const Values = styled(Fields)`
  font-size: 0.8em;
  letter-spacing: 1px;
  color: #333333;
  margin-top: 0.5em;
  padding-bottom: 2em;
`;

const TagLine = styled(Values)`
  margin-top: 0px;
  padding-bottom: 2em;
`;

const BeerImage = styled.img`
  height: 100%;
  min-width: 50%;
  object-fit: contain;
`;

const BeerImageWrapper = styled(Flex)`
  height: 60vh;
  padding-bottom: 2em;
`;

const ModalContent = styled(Flex)`
  overflow-y: auto;
`;

const GetIngredients = (beer) => {
  const ingredients = Object.entries(beer.ingredients).reduce((allTypes, item) => {
    const current = typeof item[1] === 'string' ? [item[1]] : item[1];
    return [...allTypes, ...current];
  }, []);
  const ingredientsNames = ingredients.reduce((ingredientsSet, currentIngredient) => {
    ingredientsSet.add(typeof currentIngredient === 'string' ? currentIngredient : currentIngredient.name);
    return ingredientsSet;
  }, new Set());
  return [...ingredientsNames];
};

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
      <TagLine>{beer.tagline}</TagLine>
      <Flex justifyContent="space-around" alignItems="center" width={[1]} flexWrap="wrap">
        <BeerImageWrapper flex="1 1 50%" justifyContent="center">
          <BeerImage src={beer.image_url} alt="selected beer" />
        </BeerImageWrapper>
        <Flex
          flexDirection="column"
          px="1em"
          justifyContent="center"
          alignItems="center"
          flex="1 0 50%"
          style={{ minWidth: '250px' }}
        >
          {beer.description && (
            <React.Fragment>
              <Fields>DESCRIPTION</Fields>
              <Values>{beer.description}</Values>
            </React.Fragment>
          )}
          {beer.ingredients &&
            Object.keys(beer.ingredients).length > 0 && (
              <React.Fragment>
                <Fields>INGREDIENTS</Fields>
                <Values>{GetIngredients(beer).join(', ')}</Values>
              </React.Fragment>
            )}
          {beer.food_pairing && (
            <React.Fragment>
              <Fields>FOOD PARING</Fields>
              <Values>{beer.food_pairing.join(', ')}</Values>
            </React.Fragment>
          )}
          {beer.ibu && (
            <React.Fragment>
              <Fields>BITTERNESS</Fields>
              <Values>{beer.ibu} IBU</Values>
            </React.Fragment>
          )}
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
