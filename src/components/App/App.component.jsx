import React from 'react';

import AuthProvider from '../../providers/Auth';
import SearchContextProvider from '../../providers/SearchContext';
import AppRouter from '../../routers/AppRouter';
import Theme from '../../providers/Theme';

function App() {
  return (
    <AuthProvider>
      <Theme>
        <SearchContextProvider>
          <AppRouter />
        </SearchContextProvider>
      </Theme>
    </AuthProvider>
  );
}

export default App;
