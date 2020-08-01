import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Users from './user/pages/Users'
import NewRecipe from './recipes/pages/NewRecipe';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/recipes/new" exact>
          <NewRecipe />
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
