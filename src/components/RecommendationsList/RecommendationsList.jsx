import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow-y: scroll;
`;

const RecommendationsList = ({ children }) => {
  return (
    <Container>
      <h2>Related Videos</h2>
      {children}
    </Container>
  );
};

export default RecommendationsList;
