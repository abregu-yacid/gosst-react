import React,{Component} from "react";
import "./LeftOptions.css";
import "./Left.scss";
import "./Left.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
const listIcon = <FontAwesomeIcon icon="list" />
const closeIcon = <FontAwesomeIcon icon="times" />

export default class LeftOptions extends Component{
    constructor(){
        super();
        this.state={
            isExpanded : false
        }
    }
    changeExpand = (change)=>{
        this.setState({isExpanded : change})
    }
    
    render(){
        return (
            <div className={"left-options "+(this.state.isExpanded?"expanded":"") }> 
            <button onClick={()=>this.changeExpand(true)} className={"btn-primary "+(this.state.isExpanded?"hidden":"") }>
            {listIcon}
            </button>
            <div className={"left-sub-modules "+(this.state.isExpanded?"":"hidden") }>
                <div className="left-title">
                <button onClick={()=>this.changeExpand(false)} className="btn-primary ">
                {closeIcon}  
                </button>
                <label>Calendar</label>
                </div>
               
                <ul>
                    {this.props.options.map(z=>{
                        return <li key={z.name}>
                            <Link onClick={()=>this.changeExpand(false)} to={z.ref}>{z.name}</Link>
                        </li>
                    })}
                </ul>
            </div>
          </div>
        );
    }
}