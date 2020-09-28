import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import SearchContext from '../../contexts/SearchContext';

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

const SearchBar = () => {
  const { query, setQuery } = useContext(SearchContext);
  const history = useHistory();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <SearchIcon src="search-24px.svg" alt="magnifying lens" />
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
