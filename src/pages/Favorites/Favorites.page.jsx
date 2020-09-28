import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1500px;
  padding: 0 3rem;
  justify-content: center;
`;

const FavoritesPage = () => {
  return (
    <Layout>
      <Container>Favorites</Container>
    </Layout>
  );
};

export default FavoritesPage;
