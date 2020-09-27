import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SearchContext from '../../contexts/SearchContext';
import useDebounce from '../../utils/hooks/useDebounce';

const Container = styled.div`
  padding: 0 3rem;
`;

function HomePage() {
  const { query } = useContext(SearchContext);

  const debouncedQuery = useDebounce(query, 400);

  useEffect(() => {
    console.log(debouncedQuery);
  }, [debouncedQuery]);

  return <Container>{debouncedQuery}</Container>;
}

export default HomePage;
