import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
  color: ${(props) => props.theme.colors.font};
  border: 1px solid black;
  display: flex;
  text-decoration: none;
`;

const Thumbnail = styled.img`
  margin: 0;
  width: 120px;
`;

const Title = styled.h3`
  margin: 0;
  overflow: hidden;
  padding-left: 2px;
`;

const RecommendationItem = ({ id, thumbnail, title }) => {
  return (
    <Container to={`/${id}`}>
      <Thumbnail src={thumbnail} />
      <Title>{title}</Title>
    </Container>
  );
};

export default RecommendationItem;
