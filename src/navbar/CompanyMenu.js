import React,{Component} from "react";
import Menu from "./Menu";

export default class CompanyMenu extends Component{
    
    constructor(props){
        super(props);
        this.state={
            shows : props.shows
        }
    }
    functionElement(elem){
        console.log("The element is: "+elem);
    }
    functionElementSecond(elem){
        console.log("The is other function is: "+elem);
    }
    getListOptions(){
        return [
            {id:"ccc",name : "Company 1", functionElement : (_)=>this.functionElement},
            {id:"ssscs12",name : "Company 2", functionElement : (_)=>this.functionElementSecond},
            {id:"ssscs312",name : "Company 3", functionElement : (_)=>this.functionElementSecond},
        ]
    }
    render(){
        return (
            <Menu handler={this.props.handler} currentShow={this.props.currentShow} name="Company" icon="building" elements={this.getListOptions()}/>
            
        );
    }
}