import React from 'react';
import styled from 'styled-components';

import { useSearch } from '../../providers/SearchContext';

import searchImg from '../../images/search-24px.svg';

const Form = styled.form`
  border-radius: 3px;
  display: flex;
  margin: 0;
  overflow: hidden;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 0 0.5rem;
`;

const SearchIcon = styled.img`
  background: white;
  margin: 0;
`;

const SearchBar = ({ handleOnSubmit }) => {
  const { query, setQuery } = useSearch();

  return (
    <Form onSubmit={handleOnSubmit}>
      <SearchIcon src={searchImg} alt="magnifying lens" />
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Form>
  );
};

export default SearchBar;
