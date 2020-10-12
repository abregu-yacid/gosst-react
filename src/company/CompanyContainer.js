import React from "react";

import Navbar from "../navbar/Navbar";
import LeftOptions from "../LeftOptions/LeftOptions";
import Company from "./Company";
import Pending from "../Pending/Pending.js";
import {  Route ,Switch} from "react-router-dom";
function callSubModules(){
    return [
      {name:"Home", ref:"/main/scheduler",component:Company}, 
      {name:"Cumplimiento de objetivos", ref:"/main/login1"}, 
      {name:"Reporte de eventos planificados", ref:"/main/login2"}, 
      {name:"Informe de gestión", ref:"/main/login3"}, 
    ]
}
export default class CompanyContainer extends React.Component{
    render(){
        const options = callSubModules();
        return (
        <div className="container-general">    
        <Navbar />
        <LeftOptions options={options}/>
        <div className="container-module">
            <Switch>
            <Route exact path="/company" component={Company}></Route>
            {options.map(z=>{
              return  <Route key={z.ref} exact path={z.ref} component={z.component?z.component:Pending}></Route> 
            })}
              
            </Switch>
        </div>
    </div>
    )
    }
}