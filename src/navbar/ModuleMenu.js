import React,{Component} from "react"; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{Link} from "react-router-dom";
const downIcon = <FontAwesomeIcon icon="sort-down"/>;
const upIcon = <FontAwesomeIcon icon="sort-up"/>; 
const cubesIcon = <FontAwesomeIcon icon="cubes"/>; 
export default class ModuleMenu extends Component{
    
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
            {id:"1",name : "Companies", route : "company"},
            {id:"2",name : "Organization units", route : "unit"},
            {id:"ccc",name : "Module 1", route : "company"},
            {id:"ssscs12",name : "Module 2", route : "company"},
            {id:"ssscs312",name : "Module 3", route : "company"},
        ]
    }
    getListCategories(){
        return [
            {id:"1",name : "Category 1", icon : cubesIcon},
            {id:"2",name : "Category 2", icon : cubesIcon},
            {id:"3",name : "Category 3", icon : cubesIcon},
            {id:"4",name : "Category 4", icon : cubesIcon},
            {id:"5",name : "Category 5", icon : cubesIcon},
            {id:"6",name : "Category 6", icon : cubesIcon},
            {id:"7",name : "Category 7", icon : cubesIcon},
            {id:"8",name : "Category 8", icon : cubesIcon},
            {id:"9",name : "Category 9", icon : cubesIcon},
            {id:"10",name : "Category 10", icon : cubesIcon},
            {id:"12",name : "Category 9", icon : cubesIcon},
            {id:"13",name : "Category 10", icon : cubesIcon},
            {id:"14",name : "Category 9", icon : cubesIcon},
            {id:"15",name : "Category 10", icon : cubesIcon},
        ]
    }
    render(){
        const categories = this.getListCategories().map(z=>{
            z.modules = [];
            this.getListOptions().map(y=>{
                z.modules.push(y);
                return y;
            });
            return z;
        });
        return (
            
            <div  className="dropdown">
                <FontAwesomeIcon icon="cubes"/>
                <label onClick={this.props.handler}> Module </label>
                { ( !this.props.currentShow?downIcon:upIcon)}
                <div id="section-dropdown-module" className={""+ ( this.props.currentShow?"":" hidden")}>
                    <div id="recent-module">
                     
                    <div  className="category-module">Recently visited</div>   
                    <div  className="single-module">Medical Exam</div>   
                    <div  className="single-module">Formation</div>   
                    <div  className="single-module">Workers</div>
                    </div>

                    <div id="search-module">
                    <FontAwesomeIcon icon="search"/>Search
                        <input type="text" className="form-control" />
                    </div>
                                 <div className="section-only-module">
                    {
                         categories.map(z=>{
                         return (
                            <div className="section-category-module" key={z.id}>
                            <div className="category-module" key={z.id}>
                            {z.icon}{z.name}
                             </div>
                            
                             {z.modules.map(y=>{
                              return <div key={y.id} className="single-module">
                                  <Link to={"/"+y.route} >{y.name}</Link>
                                  </div>   
                             })}
                             
                             </div>
                             
                             );
                        })
                    }
                    
                    </div>
                </div>
                 
                
          </div>
        );
    }
}