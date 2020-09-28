import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useFavorites } from '../../providers/Favorites';
import { useAuth } from '../../providers/Auth';

const Button = styled.button`
  text-transform: uppercase;
`;

const ToggleFavoriteButton = ({ id, thumbnail, title, description }) => {
  const { favorites, favoritesDispatch } = useFavorites();
  const { authenticated } = useAuth();

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.findIndex((favorite) => favorite.id === id) !== -1);
  }, [favorites, id]);

  const handleOnClick = () => {
    if (isFavorite) {
      favoritesDispatch({
        type: 'REMOVE_FAVORITE',
        id,
      });
    } else {
      favoritesDispatch({
        type: 'ADD_FAVORITE',
        favorite: {
          id,
          thumbnail,
          title,
          description,
        },
      });
    }
  };

  return (
    <>
      {authenticated ? (
        <Button onClick={handleOnClick}>
          {isFavorite ? 'Remove from' : 'Add to'} favorites
        </Button>
      ) : (
        <></>
      )}
    </>
  );
};

export default ToggleFavoriteButton;
