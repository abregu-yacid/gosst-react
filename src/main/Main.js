import React, { Component } from 'react';
import Scheduler from '../scheduler/Scheduler';
import "../scheduler/Scheduler.css";
 
const dataEvents = [
    { start_date:'2020-10-10 6:00', end_date:'2020-10-10 8:00', text:'Event 1', id: 1 },
    { start_date:'2020-10-13 10:00', end_date:'2020-10-13 18:00', text:'Event 2', id: 2 }
];
export default class Main extends Component{
    componentDidMount() {
        this.callEvents();
    }
    constructor(props) {
        super(props);
        this.state = {
          listFullEventos : []
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
            <div className='scheduler-container'>
                    <Scheduler events={dataEvents}/>
                </div>
        )
    }
}
