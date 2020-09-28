import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../../pages/Home';
import FavoritesPage from '../../pages/Favorites';
import VideoPage from '../../pages/Video';
import NotFound from '../../pages/NotFound';
import Private from '../Private';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/video/:videoId">
        <VideoPage />
      </Route>
      <Private exact path="/favorites">
        <FavoritesPage />
      </Private>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
