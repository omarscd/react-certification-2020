import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import SearchContext from '../../contexts/SearchContext';
import VideoCard from '../../components/VideoCard';
import { getQueryURL, fetchData } from '../../utils/fns';
import useDebounce from '../../utils/hooks/useDebounce';

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

  const [searchResult, setResult] = useState(null);

  useEffect(() => {
    fetchData(getQueryURL(debouncedQuery)).then((data) => setResult(data));
  }, [debouncedQuery]);

  return (
    <Layout>
      {searchResult ? (
        <Container>
          {searchResult.items.map((item) => (
            <VideoCard
              key={item.id.videoId}
              id={item.id.videoId}
              thumbnail={item.snippet.thumbnails.medium.url}
              title={item.snippet.title}
              description={item.snippet.description}
            />
          ))}
        </Container>
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>
      )}
    </Layout>
  );
}

export default HomePage;
