/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useReducer } from 'react';

import { USERNAME_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import { useAuth } from '../Auth';
import favoritesReducer from '../../reducers/favorites';

const FavoritesContext = React.createContext([]);

const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(`Can't use "useFavorites" without a FavoritesProvider!`);
  }
  return context;
};

const FavoritesProvider = ({ children }) => {
  const [favorites, favoritesDispatch] = useReducer(favoritesReducer, []);
  const { username, authenticated } = useAuth();
  const userFavoritesStorageKey = `${USERNAME_STORAGE_KEY}-${username}`;

  useEffect(() => {
    if (authenticated) {
      const favoritesData = storage.get(userFavoritesStorageKey);
      if (favoritesData) {
        favoritesDispatch({ type: 'POPULATE_FAVORITES', favorites: favoritesData });
      }
    } else {
      favoritesDispatch({ type: 'CLEAR_FAVORITES' });
    }
  }, [authenticated]);

  useEffect(() => {
    if (authenticated) {
      storage.set(userFavoritesStorageKey, favorites);
    }
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, favoritesDispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { useFavorites, FavoritesProvider as default };
