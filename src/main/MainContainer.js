import React from "react";

import Navbar from "../navbar/Navbar";
import LeftOptions from "../LeftOptions/LeftOptions";
import Main from "./Main";
import Pending from "../Pending/Pending.js";
import {  Route ,Switch} from "react-router-dom";
function callSubModules(){
    return [
      {name:"Home",functionCall: functionCall1, ref:"/main/scheduler",component:Main}, 
      {name:"Cumplimiento de objetivos",functionCall: functionCall1, ref:"/main/login1"}, 
      {name:"Reporte de eventos planificados",functionCall: functionCall1, ref:"/main/login2"}, 
      {name:"Informe de gestión",functionCall: functionCall1, ref:"/main/login3"}, 
    ]
  }
  function functionCall1(){
      console.log("test!");
  }
export default class MainContainer extends React.Component{
    render(){
        const options = callSubModules();
        return (
        <div className="container-general">
       
        <Navbar />
        <LeftOptions options={options}/> 
        <div className="container-module">
            <Switch>
            <Route exact path="/main" component={Main}></Route>
            {options.map(z=>{
              return  <Route key={z.ref} exact path={z.ref} component={z.component?z.component:Pending}></Route> 
            })}
             
            </Switch>
        </div>
    </div>
    )
    }
}