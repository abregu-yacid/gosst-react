import React from "react";

import Navbar from "../navbar/Navbar";
import LeftOptions from "../LeftOptions/LeftOptions";
import Unit from "./Unit";
import Pending from "../Pending/Pending.js";
import {  Route ,Switch} from "react-router-dom";
function callSubModules(){
    return [
      {name:"Home",functionCall: functionCall1, ref:"/unit",component:Unit}, 
      {name:"Section 12 ",functionCall: functionCall1, ref:"/unit/unit1"}, 
      {name:"Section 2",functionCall: functionCall1, ref:"/unit/login2"}, 
      {name:"Informe",functionCall: functionCall1, ref:"/main/login3"}, 
    ]
  }
  function functionCall1(){
      console.log("test!");
  } 
export default class UnitContainer extends React.Component{
    render(){
        const options = callSubModules();
        return (
        <div className="container-general">
         
        <Navbar />
        <LeftOptions options={options}/> 
        <div className="container-module">
            <Switch>
            <Route exact path="/unit" component={Unit}></Route>
            {options.map(z=>{
              return  <Route key={z.ref} exact path={z.ref} component={z.component?z.component:Pending}></Route> 
            })}
              
            </Switch>
        </div>
    </div>
    )
    }
}