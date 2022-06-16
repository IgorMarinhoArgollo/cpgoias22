import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Video from './Pages/Video';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/video' component={Video} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
