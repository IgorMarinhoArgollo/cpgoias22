import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Video from './Pages/Video';
import NotFound from './Pages/NotFound';
import Ajuste from './Pages/Ajuste';
import Teclado from './Pages/Teclado';
import Daltonico from './Pages/Daltonico';
import DarkMode from './Pages/DarkMode';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/video' component={Video} />
      <Route exact path='/ajuste' component={Ajuste} />
      <Route exact path='/darkmode' component={DarkMode} />
      <Route exact path='/teclado' component={Teclado} />
      <Route exact path='/daltonico' component={Daltonico} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
