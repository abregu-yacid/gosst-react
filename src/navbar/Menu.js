import React,{Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const downIcon = <FontAwesomeIcon icon="sort-down"/>;
const upIcon = <FontAwesomeIcon icon="sort-up"/>; 

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            icon : downIcon,showMenu:false,classAux:"hidden"
        }
    }
    clickHandler = ()=>{
        this.props.handler();
    }
    render(){
        return (
            <div  className="dropdown">
                <FontAwesomeIcon icon={this.props.icon}/>
                <label onClick={this.clickHandler}> {this.props.name} </label>
                { ( !this.props.currentShow?downIcon:upIcon)}
                <ul className={(this.props.class?this.props.class:"list-dropdown")+ ( this.props.currentShow?"":" hidden")}>
                    {
                         this.props.elements.map(z=>{
                            return <li key={z.id} onClick={z.functionElement()}>{z.name}</li>
                        })
                    }
                    
                </ul>
                 
                
          </div>
        );
    }
}