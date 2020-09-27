import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SearchContext from '../../contexts/SearchContext';

const Container = styled.div`
  padding: 0 3rem;
`;

function HomePage() {
  const { query } = useContext(SearchContext);

  useEffect(() => {
    console.log(query);
  }, [query]);

  return <Container>{query}</Container>;
}

export default HomePage;
