import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users'
import UserRecipes from './recipes/pages/UserRecipes';
import NewRecipe from './recipes/pages/NewRecipe';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/recipes" exact>
            <UserRecipes />
          </Route>
          <Route path="/recipes/new" exact>
            <NewRecipe />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
