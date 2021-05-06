import Spinner from './components/UI/Spinner/Spinner';
import React, {Suspense, useEffect} from 'react';
import Layout from './components/Layout/Layout';
import GamePlay from './containers/GamePlay';
import MultiPlay from './containers/MultiPlay';
import Scoreboard from './containers/Scoreboard';
import {Route, Switch} from 'react-router-dom';
import NoMatch from './components/NoMatch/NoMatch';

import './App.css';

function App() {
  let routes = (
    <Switch>
      <Route path="/" component={GamePlay} exact/>
      <Route path="/multi" component={MultiPlay} exact/>
      <Route path="/scoreboard" component={Scoreboard} exact/>
      <Route component={NoMatch}/>
    </Switch>
  );
  
  return (
    <Layout>
      {routes}
    </Layout>
  );
}

export default App;
