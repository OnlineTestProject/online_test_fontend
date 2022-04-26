// import "./App.css";
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import HomeFeature from './features/Home';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/post/:postId" exact />

        {/* <Route path="/" component={CounterFeature} exact /> */}
        <Route path="/" component={HomeFeature} exact />
        {/* <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={SongFeature} />
        <Route path="/products" component={ProductFeature} /> */}

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
