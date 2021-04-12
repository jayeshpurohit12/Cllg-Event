import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mainpg from "./Mainpg";
import Create from "./Create";
import Upcom from "./Upcom";
import Live_page from "./Live_page";
import Previous from "./Previous";
import ContactPage from "./Contact";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/create" component={Create} />

          <Route exact path="/" component={Mainpg} />

          <Route path="/Upcomming" component={Upcom} />

          <Route path="/Live" component={Live_page} />

          <Route path="/Previous" component={Previous} />

          <Route path="/Contact" component={ContactPage} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
