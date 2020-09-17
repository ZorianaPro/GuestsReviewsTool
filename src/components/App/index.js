import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GuestReviews from '../GuestReviews';

const App = () => (
    <div className="App">
      <Switch>
        <Route path="/reviews/:page">
          <GuestReviews/>
        </Route>
        <Route path="*">
          <Redirect to="/reviews/1" />
        </Route>
      </Switch>
    </div>
);

export default App;
