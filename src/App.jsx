import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Mainpg from './Mainpg';
import Create from './Create';

const App=()=>{
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/create">
        <Create/>
        </Route>
        <Route path="/">
        <Mainpg/>
        </Route>
      </Switch>
      </div>
    </Router>
  )
}
export default App;