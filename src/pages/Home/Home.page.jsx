import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import SearchContext from '../../contexts/SearchContext';
import VideoCard from '../../components/VideoCard';
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
          <VideoCard
            key={item.id.videoId}
            id={item.id.videoId}
            thumbnail={item.snippet.thumbnails.medium.url}
            title={item.snippet.title}
            description={item.snippet.description}
          />
        ))}
      </Container>
    </Layout>
  );
}

export default HomePage;
