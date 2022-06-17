import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Ajuste from './Pages/Ajuste';
import Teclado from './Pages/Teclado';
import Daltonico from './Pages/Daltonico';
import DarkMode from './Pages/DarkMode';
import Speech from './Pages/Speech';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/ajuste' component={Ajuste} />
      <Route exact path='/darkmode' component={DarkMode} />
      <Route exact path='/teclado' component={Teclado} />
      <Route exact path='/filtrocolorblind' component={Daltonico} />
      <Route exact path='/pesquisa-por-fala' component={Speech} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
