import React from 'react';

import { Switch, Route, BrowserRouter } from "react-router-dom";

import Main from './pages/Main'
import './styles/App.scss'

const App = () => {
  return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }

export default App;
