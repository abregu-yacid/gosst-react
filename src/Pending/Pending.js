import React,{Component} from "react";
import "./Pending.scss";
import underImage from "../images/website-maintenance.png";
export default class Pending extends Component{
render(){
    return(
        <div className="under-construction">
            <img src={underImage} alt="maing"></img>
            Under Construction
            </div>
    )
}
}