import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import media from 'core/styles/media-breakpoints';
import Button from 'core/components/button';

const BeerImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const BeerImageWrapper = styled.div`
  height: 14vw;
  width: 14vw;
  box-shadow: 1px 1px 20px 1px lightgrey;
  padding: 10px;
  max-width: 100px;
  max-height: 100px;
  min-height: 80px;
  min-width: 80px;
  margin-left: -3em;
  border-radius: 3px;
  background-color: white;
`;

const BeerDetailsWrapper = styled(Flex)`
  padding: 1.2em;
  box-shadow: 1px 1px 20px 1px lightgrey;
  border-radius: 3px;
  margin-left: 1.8em;
`;

const BeerTitle = styled.h3`
  color: rgb(247, 134, 44);
  font-family: 'Helvetica', 'Arial';
  letter-spacing: 2px;
  font-size: 1em;
  margin-top: 0px;
`;

const SecondaryText = styled.p`
  font-family: 'Helvetica', 'Arial';
  font-size: 0.8em;
  color: rgb(187, 187, 187);
  margin: 0px;
`;

const SmallSecondaryText = styled(SecondaryText)`
  font-size: 0.7em;
  font-weight: lighter;
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

const OrangeText = styled(GreenText)`
  color: rgb(247, 134, 44);
`;

const SmallGreenText = styled(GreenText)`
  font-size: 1em;
`;

const SmallOrangeText = styled(OrangeText)`
  font-size: 1em;
`;

const ShowMoreButton = styled(Box)`
  font-size: 0.8em;
  ${media.desktop`display: auto;`};
  ${media.tablet`display: auto;`};
  ${media.phone`display: none`};
`;

const Wrapper = styled.div`
  outline: 0;
`;

class Beer extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    abv: PropTypes.number.isRequired,
    volume: PropTypes.number.isRequired,
    volumeUnit: PropTypes.string.isRequired,
    showMoreCallback: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  };

  onClick = () => {
    if (!this.isShowMoreButtonShowing()) {
      const { showMoreCallback, id } = this.props;
      showMoreCallback(id);
    }
  };

  onButtonClicked = (event) => {
    const { showMoreCallback, id } = this.props;
    showMoreCallback(id);

    event.stopPropagation();
    return false;
  };

  isShowMoreButtonShowing = () =>
    this.showMoreButton && window.getComputedStyle(this.showMoreButton).display !== 'none';

  render() {
    const {
      name, tagline, image, abv, volume, volumeUnit,
    } = this.props;

    return (
      <Wrapper role="button" onClick={this.onClick}>
        <BeerDetailsWrapper>
          <BeerImageWrapper width="14vw">
            <BeerImage src={image} alt="beer" />
          </BeerImageWrapper>
          <Flex flexDirection="column" ml="1em" py="10px" width={[2 / 3]} flex="1 1 100%">
            <BeerTitle>{name.toUpperCase()}</BeerTitle>
            <SecondaryText>{tagline}</SecondaryText>
            <Flex flexDirection="column" flex="1 1 100%">
              <Box flex="1 1 auto" />
              <ShowMoreButton
                flex="0 1 auto"
                innerRef={(showMoreButton) => {
                  this.showMoreButton = showMoreButton;
                }}
              >
                <Button
                  backgroundColor="rgb(123, 187, 45)"
                  color="white"
                  onClick={this.onButtonClicked}
                >
                  Show more
                </Button>
              </ShowMoreButton>
            </Flex>
          </Flex>
          <Flex>
            <VerticalBar />
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            flex="1 1 auto"
            pl="1.2em"
          >
            <SmallSecondaryText>alc/vol</SmallSecondaryText>
            <div>
              <GreenText>{abv}</GreenText>
              <SmallGreenText>%</SmallGreenText>
            </div>
            <Flex flexWrap="wrap" justifyContent="center">
              <SmallSecondaryText>Unit&nbsp;</SmallSecondaryText>
              <SmallSecondaryText>contains</SmallSecondaryText>
            </Flex>
            <div>
              <OrangeText>{volume}</OrangeText>
              <SmallOrangeText>{volumeUnit}</SmallOrangeText>
            </div>
          </Flex>
        </BeerDetailsWrapper>
      </Wrapper>
    );
  }
}

export default Beer;
