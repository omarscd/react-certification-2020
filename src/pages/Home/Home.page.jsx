import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import SearchContext from '../../contexts/SearchContext';
import { getQueryURL } from '../../utils/fns';
import useDebounce from '../../utils/hooks/useDebounce';

import responses from '../../tests/fixtures/apiSearchResponse';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1500px;
  padding: 0 3rem;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  width: 400px;
`;

function HomePage() {
  const { query } = useContext(SearchContext);

  const debouncedQuery = useDebounce(query, 400);

  useEffect(() => {
    console.log(getQueryURL(debouncedQuery));
  }, [debouncedQuery]);

  return (
    <Layout>
      {debouncedQuery}
      <Container>
        {responses[0].items.map((item) => (
          <Card key={item.id.videoId}>
            <div>{item.snippet.thumbnails.high.url}</div>
            <div>{item.snippet.title}</div>
            <div>{item.snippet.description}</div>
          </Card>
        ))}
      </Container>
    </Layout>
  );
}

export default HomePage;
