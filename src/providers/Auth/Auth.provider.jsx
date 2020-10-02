import React, { useState, useEffect, useContext } from 'react';

import { USERNAME_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(undefined);

  useEffect(() => {
    const user = storage.get(USERNAME_STORAGE_KEY);
    const isAuthenticated = !!user;

    setAuthenticated(isAuthenticated);
    if (isAuthenticated) {
      setUsername(user);
    }
  }, []);

  const login = (name) => {
    setAuthenticated(true);
    setUsername(name);
    storage.set(USERNAME_STORAGE_KEY, name);
  };

  const logout = () => {
    setAuthenticated(false);
    setUsername(undefined);
    storage.remove(USERNAME_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider as default };
