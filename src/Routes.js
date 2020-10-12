import React from "react";
import {  Route, Switch } from "react-router-dom";
import Login from "./login/Login.js";
import App from "./App"
import   MainContainer   from "./main/MainContainer.js";
import   CompanyContainer   from "./company/CompanyContainer.js";
import   UnitContainer   from "./unit/UnitContainer.js";

import { faCoffee ,faUser ,faList,faSortDown,faSortUp,faBuilding,faTimes,faCubes,faSearch} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fab, faCoffee,faUser,faList,faSortDown,faSortUp,faBuilding,faTimes,faCubes,faSearch);

export default class Routes extends React.Component {
  render(){
    
    return (
      <Switch>
      <Route exact path="/">
        <App />
      </Route>
      
      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/main" component={MainContainer} />
      <Route path="/main/:subId" component={MainContainer} />
      
      <Route exact path="/company" component={CompanyContainer} />
      <Route path="/company/:subId" component={CompanyContainer} />
      
      <Route exact path="/unit" component={UnitContainer} />
      <Route path="/unit/:subId" component={UnitContainer} />
      
      </Switch>
    );
  }
}