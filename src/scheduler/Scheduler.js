import React, { Component } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
 import $ from "jquery";
const scheduler = window.scheduler;
 
export default class Scheduler extends Component {
    componentDidMount() {
        scheduler.skin = 'material';
        scheduler.config.header = [
            'day',
            'week',
            'month',
            'date',
            'prev',
            'today',
            'next'
        ];
 
        const { events } = this.props;
        scheduler.init(this.schedulerContainer, new Date(),"month");
        scheduler.clearAll();
        scheduler.templates.event_class = function(start,end,ev){
            if(ev.id > 0){
                return "event";
            }
        }
        scheduler.parse(events);
        
        $(".dhx_cal_data").on("click",function(e,src){
            //e.preventDefault();
            console.log(e);
            return;
        })
    }
 
    render() {
        return (
            <div
                ref={ (input) => { this.schedulerContainer = input } }
                style={ { width: '100%', height: '100%' } }
            ></div>
       );
    }
}