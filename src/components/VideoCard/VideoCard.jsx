import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  flex-direction: column;
  margin: 0.7rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  width: 320px;

  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

  :hover {
    transform: translateY(-10px);
    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  }
`;

const Thumbnail = styled.img`
  margin: 0;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.font};
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin: 0;
  padding: 0.5rem;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.font};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin: 0;
  padding: 0 0.5rem 0.5rem;
`;

const VideoCard = ({ thumbnail, id, title, description }) => {
  return (
    <Container to={`/${id}`}>
      <Thumbnail src={thumbnail} alt="Thumbnail, no description available" />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default VideoCard;
