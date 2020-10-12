import React, { Component } from 'react'; 

export default class Unit extends Component{
    componentDidMount() {
        this.callEvents();
    }
    constructor(props) {
        super(props);
        this.state = {
          listEmpresas : []
        };
    }
    functionCall1(){
        console.log("123")
    }
    
    callEvents() {
        const dataParam = {
            empresaId : +(sessionStorage.getItem("gestopcompanyid"))
        }
        console.log(dataParam);
        //scheduler.clearAll();
        return;
/*         LogicCallssss.callAjaxPost("scheduler",dataParam,(response) => {  
            this.setState({listFullEventos : response.list});
            this.setState({listFullEventos : this.data});
        });
 */    }
    render(){
        return (
            <div className='unit-container'>
                    Units
                </div>
        )
    }
}
