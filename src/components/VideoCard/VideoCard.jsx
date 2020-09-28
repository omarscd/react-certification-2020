import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ToggleFavoriteButton from '../ToggleFavoriteButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  flex-direction: column;
  margin: 0.7rem;
  max-height: 600px;
  overflow: hidden;
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Thumbnail = styled.img`
  margin: 0;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.font};
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin: 0;
  margin: 0.5rem;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.font};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin: 0;
  overflow: hidden;
  margin: 0 0.5rem 0.5rem;
  text-overflow: ellipsis;
`;

const VideoCard = ({ thumbnail, id, title, description }) => {
  return (
    <Container to={`/video/${id}`}>
      <StyledLink to={`/video/${id}`}>
        <Thumbnail src={thumbnail} alt="Thumbnail, no description available" />
      </StyledLink>
      <ToggleFavoriteButton
        id={id}
        thumbnail={thumbnail}
        title={title}
        description={description}
      />
      <StyledLink to={`/video/${id}`}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </StyledLink>
    </Container>
  );
};

export default VideoCard;
