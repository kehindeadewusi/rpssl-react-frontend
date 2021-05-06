import Spinner from './components/UI/Spinner/Spinner';
import React, {Suspense, useEffect} from 'react';
import Layout from './components/Layout/Layout';
import GamePlay from './containers/GamePlay';
import Multiplay from './containers/Multiplay';
import Scoreboard from './containers/Scoreboard';
import {Route, Switch} from 'react-router-dom';
import NoMatch from './components/NoMatch/NoMatch';

import './App.css';

function App() {
  let routes = (
    <Switch>
      <Route path="/" component={GamePlay} exact/>
      <Route path="/multi" component={Multiplay} exact/>
      <Route path="/scoreboard" component={Scoreboard} exact/>
      <Route component={NoMatch}/>
    </Switch>
  );
  // return (
  //   <div className="App">
  //     <p>Hey there, what's going on?</p>
  //   </div>
  // );
  return (
    <Layout>
      {routes}
    </Layout>
  );
}

export default App;
