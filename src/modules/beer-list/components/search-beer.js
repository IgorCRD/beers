import React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchBar = styled(Box)`
  background-color: white;
  box-shadow: 24px -8px 20px -25px grey, -24px -8px 20px -25px grey;
  border-radius: 5px;
  font-size: 1.5em;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid lightgray;
  font-family: helvetica;
  color: #25174d;

  &:focus {
    outline: 0;
  }
`;

const SearchBeer = ({ input, onChangeCallback }) => (
  <Flex p="1em" width={[1, 3 / 4, 2 / 3]}>
    <SearchBar p="1em" width={[1]}>
      <SearchInput value={input} onChange={onChangeCallback} />
    </SearchBar>
  </Flex>
);

SearchBeer.propTypes = {
  input: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
};

export default SearchBeer;
