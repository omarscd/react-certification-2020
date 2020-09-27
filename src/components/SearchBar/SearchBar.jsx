import React, { useContext } from 'react';
import styled from 'styled-components';

import SearchContext from '../../contexts/SearchContext';

const Input = styled.input``;

const SearchBar = () => {
  const { query, setQuery } = useContext(SearchContext);

  return (
    <Input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
