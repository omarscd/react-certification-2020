import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Input = styled.input``;

const SearchBar = ({ defaultQuery = '' }) => {
  const [query, setQuery] = useState(defaultQuery);

  useEffect(() => {
    console.log(query);
  }, [query]);

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
