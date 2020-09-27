import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import SearchContextProvider from '../../providers/SearchContext';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Fortune from '../Fortune';
import Layout from '../Layout';
import Theme from '../../providers/Theme';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Theme>
          <SearchContextProvider>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
              <Fortune />
            </Layout>
          </SearchContextProvider>
        </Theme>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
