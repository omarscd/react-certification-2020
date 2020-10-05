import React, { useState, useContext } from 'react';

const SearchContext = React.createContext();

const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`Can't use "useSearch" without a SearchContextProvider!`);
  }
  return context;
};

const SearchContextProvider = ({ children }) => {
  const [query, setQuery] = useState('Subdivisions');

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export { useSearch, SearchContextProvider as default };
