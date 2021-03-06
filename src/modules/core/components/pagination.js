import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import arrow from 'assets/images/arrow.svg';

const PreviousArrow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.3s;
`;

const NextArrow = styled(PreviousArrow)`
  transform: rotateZ(180deg);
`;

const WordWrapper = styled(Flex)`
  height: 50px;
  width: 101.7px;
  transform: translateY(100%);
  transition: 0.3s;
`;

const Button = styled(Flex)`
  position: relative;
  overflow: hidden;
  height: 50px;
  width: 101.7px;
  border: 1px solid lightgray;
  border-radius: 5px;

  &:hover > ${WordWrapper} {
    transform: translateY(0px);
    transition: 0.3s;
  }
  &:hover > ${PreviousArrow} {
    transform: translateY(-100%);
    transition: 0.3s;
  }
  &:hover > ${NextArrow} {
    transform: rotateZ(180deg) translateY(100%);
    transition: 0.3s;
  }
`;

const Pagination = ({ previousCallback, nextCallback }) => (
  <Flex
    is="ul"
    justifyContent="space-evenly"
    width={[1]}
    m="0px"
    p="0px"
    style={{ listStyle: 'none' }}
  >
    <Button
      is="li"
      role="button"
      flexDirection="column"
      alignItems="center"
      onClick={previousCallback}
    >
      <PreviousArrow />
      <WordWrapper justifyContent="center" alignItems="center">
        Previous
      </WordWrapper>
    </Button>
    <Button is="li" role="button" flexDirection="column" alignItems="center" onClick={nextCallback}>
      <NextArrow />
      <WordWrapper justifyContent="center" alignItems="center">
        Next
      </WordWrapper>
    </Button>
  </Flex>
);

Pagination.propTypes = {
  nextCallback: PropTypes.func,
  previousCallback: PropTypes.func,
};

Pagination.defaultProps = {
  nextCallback: undefined,
  previousCallback: undefined,
};

export default Pagination;
