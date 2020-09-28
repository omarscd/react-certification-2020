import React from 'react';

import AuthProvider from '../../providers/Auth';
import FavoritesProvider from '../../providers/Favorites';
import SearchContextProvider from '../../providers/SearchContext';
import AppRouter from '../../routers/AppRouter';
import Theme from '../../providers/Theme';

function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <Theme>
          <SearchContextProvider>
            <AppRouter />
          </SearchContextProvider>
        </Theme>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;
