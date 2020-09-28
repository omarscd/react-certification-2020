import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import VideoCard from '../../components/VideoCard';
import { useFavorites } from '../../providers/Favorites';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1500px;
  padding: 0 3rem;
  justify-content: center;
`;

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <Layout>
      <Container>
        {favorites.map((item) => (
          <VideoCard
            key={item.id}
            id={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            description={item.description}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default FavoritesPage;
