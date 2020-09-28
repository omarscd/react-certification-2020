import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import SearchContext from '../../contexts/SearchContext';
import { getURL } from '../../utils/fns';
import useDebounce from '../../utils/hooks/useDebounce';

const Container = styled.div`
  padding: 0 3rem;
`;

function HomePage() {
  const { query } = useContext(SearchContext);

  const debouncedQuery = useDebounce(query, 400);

  useEffect(() => {
    console.log(getURL(debouncedQuery));
  }, [debouncedQuery]);

  return (
    <Layout>
      <Container>{debouncedQuery}</Container>
    </Layout>
  );
}

export default HomePage;
