import React, {Component} from 'react';
import * as $ from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./PlannerHome.css";
import Popup from './Popup.js';

const Task =(props)=>(
    <div>
        <a href={`#${props.id}`}>
            <div className = "task-block" style={{"top": props.top, "height": props.length, "backgroundColor": props.backGndColor}}>
                <p className="center-box">
                {props.taskTitle}
                </p>
            </div>
        </a>
        <Popup taskTitle={props.taskTitle} taskContent={props.taskContent} id={props.id}/>
    </div>
)

const TimeSlot=(props)=>(
    <div className="time-slot" style={{"top":props.timeTop}}>
        {props.time}
    </div>
)

const PlannerOutline = (props)=>(
    <div className="planner-box" id='planner-box'>
        <div className = "day-row">
            <div className = 'day-col'>
                Time/Day
            </div>
            <div className = 'day-col'>
                Mon
            </div>
            <div className = 'day-col'>
                Tue
            </div>
            <div className = 'day-col'>
                Wed
            </div>
            <div className = 'day-col'>
                Thur
            </div>
            <div className = 'day-col'>
                Fri
            </div>
            <div className = 'day-col'>
                Sat
            </div>
            <div className = 'day-col'>
                Sun
            </div>
        </div>
        <div className ='time-col'>
            <TimeSlot time={"8:00"} timeTop={"0%"}/>
            <TimeSlot time={"17:00"} timeTop={"57.14%"}/>
            <TimeSlot time={"19:00"} timeTop={"67.85%"}/>
            <TimeSlot time={"22:00"} timeTop={"95%"}/>
        </div>
        <div className = 'day-col'>
                <Task id={'123'} taskTitle={"working!"} taskContent={'Working Harrrrrd!'} top={"0%"} length={"57.14%"} backGndColor={"#CEF1FB"}/>
                <Task id={'456'} taskTitle={"dinner!"} taskContent={'Have a Feast!'} top={"57.14%"} length={"10.71%"} backGndColor={"#E5CEFB"}/>
                <Task id={'789'} taskTitle={"coding!"} taskContent={'Writing Projectsssss!'} top={"67.85%"} length={"32.15%"} backGndColor={"#FBE6CE"}/>
        </div>
        <div className = 'day-col'>
                stuff
        </div>
        <div className = 'day-col'>
                stuff
        </div>
        <div className = 'day-col'>
                stuff
        </div>
        <div className = 'day-col'>
                stuff
        </div>
        <div className = 'day-col'>
                stuff
        </div>
        <div className = 'day-col'>
                stuff
        </div>
    </div>
)

const PlannerHome = (props)=>(
    <div>
        <nav>
        <Link to={'/'} style={{ textDecoration: 'none' }}>Home    </Link> |  
        <Link to={'/planner'} style={{ textDecoration: 'none' }}>Planner   </Link>
        </nav>
        <PlannerOutline/>
    </div>
)

export default PlannerHome;