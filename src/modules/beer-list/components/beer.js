import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import media from 'core/styles/media-breakpoints';

const BeerImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const BeerImageWrapper = styled.div`
  height: 14vw;
  width: 14vw;
  box-shadow: 0px 0px 10px lightgrey;
  padding: 10px;
  max-width: 160px;
  max-height: 160px;
  min-height: 80px;
  min-width: 80px;
  margin-left: -3em;
  border-radius: 3px;
  background-color: white;
`;

const BeerDetailsWrapper = styled(Flex)`
  padding: 1.2em;
  box-shadow: 0px 0px 10px lightgrey;
  border-radius: 3px;
`;

const BeerTitle = styled.h3`
  color: rgb(247, 134, 44);
  font-family: 'Helvetica', 'Arial';
  letter-spacing: 2px;
  font-size: 1em;
`;

const SecondaryText = styled.p`
  font-family: 'Helvetica', 'Arial';
  font-size: 0.8em;
  color: rgb(187, 187, 187);
  margin: 0px;
`;

const VerticalBar = styled.div`
  background-color: rgb(224, 224, 224);
  width: 1px;
`;

const GreenText = styled.span`
  color: rgb(123, 187, 45);
  font-family: 'Helvetica', 'Arial';
  font-weight: bold;
  font-size: 2em;
  ${media.desktop`font-size: 2em`};
  ${media.tablet`font-size: 1.5em`};
  ${media.phone`font-size: 1em`};
`;

const OrangeText = styled.span`
  color: rgb(247, 134, 44);
  font-family: 'Helvetica', 'Arial';
  font-weight: bold;
  font-size: 2em;
  ${media.desktop`font-size: 2em`};
  ${media.tablet`font-size: 1.5em`};
  ${media.phone`font-size: 1em`};
`;

const Beer = ({
  name, tagline, image, abv, volume, volumeUnit,
}) => (
  <Box width={[1, 3 / 4, 2 / 3]} px="1em">
    <BeerDetailsWrapper>
      <BeerImageWrapper>
        <BeerImage src={image} alt="beer" />
      </BeerImageWrapper>
      <Flex flexDirection="column" ml="1em" width={[2 / 3]}>
        <BeerTitle>{name.toUpperCase()}</BeerTitle>
        <SecondaryText>{tagline}</SecondaryText>
      </Flex>
      <Flex>
        <VerticalBar />
      </Flex>
      <Flex flexDirection="column" alignItems="center" flex="1 1 auto" pl="1.2em">
        <SecondaryText>alc/vol</SecondaryText>
        <GreenText>{abv}%</GreenText>
        <Flex flexDirection="column" alignItems="center" flex="1 1 auto">
          <SecondaryText>Unit </SecondaryText>
          <SecondaryText>contains</SecondaryText>
        </Flex>
        <Flex flexDirection="column" alignItems="center" flex="1 1 auto">
          <OrangeText>{volume}</OrangeText>
          <OrangeText>{volumeUnit}</OrangeText>
        </Flex>
      </Flex>
    </BeerDetailsWrapper>
  </Box>
);

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
  volumeUnit: PropTypes.string.isRequired,
};

export default Beer;
