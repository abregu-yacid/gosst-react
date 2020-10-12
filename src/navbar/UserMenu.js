import React,{Component} from "react";
import Menu from "./Menu";

export default class UserMenu extends Component{
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
            {id:"sss12",name : "Test 1", functionElement : (_)=>this.functionElement},
            {id:"aa123",name : "Test 2", functionElement : (_)=>this.functionElementSecond},
        ]
    }
    render(){
        return (
            <Menu handler={this.props.handler} currentShow={this.props.currentShow} name="User" icon="user" elements={this.getListOptions()}/>
        );
    }
}