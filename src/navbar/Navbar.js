import React,{Component} from "react";
import logo from "../images/logoVerticalSel.png";
import "./Navbar.css";
import UserMenu from "./UserMenu.js";
import CompanyMenu from "./CompanyMenu";
import ModuleMenu from "./ModuleMenu";
import "./Navbar.scss";
export default class Navbar extends Component{
    constructor() {
        super();
        this.state={
            showMenu1:false,showMenu2:false,showMenu3:false
        }
      }
      handler1=()=>{
        this.setState({
            showMenu1: !this.state.showMenu1,
            showMenu2: false,
            showMenu3: false,
        });
      }
      handler2=()=>{
        this.setState({
            showMenu1: false,
            showMenu2: !this.state.showMenu2,
            showMenu3: false,
        });
      }
      handler3=()=>{
        this.setState({
            showMenu1: false,
            showMenu2: false,
            showMenu3: !this.state.showMenu3,
        });
      }
    render(){
        return (
            <div className="navbar">
                <div className="navbar-image">
                    <img src={logo} alt="logo"/>
                    <ModuleMenu handler = {this.handler3} currentShow={this.state.showMenu3}/>
                </div>
                <div className="navbar-options">
                    <CompanyMenu handler = {this.handler2} currentShow={this.state.showMenu2}/>
                    <UserMenu handler = {this.handler1}   currentShow={this.state.showMenu1}/>
                </div>
            
          </div>
        );
    }
}