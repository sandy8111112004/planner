import React, {Component} from 'react';
import * as $ from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./PlanerHome.css"

const Task =(props)=>(
    <div className = "task-block" style={{"top": props.top, "height": props.length, "backgroundColor": props.backGndColor}}>
        <p className="center-box">
        {props.taskContent}
        </p>
    </div>
)

const TimeSlot=(props)=>(
    <div className="time-slot" style={{"top":props.timeTop}}>
        {props.time}
    </div>
)

const PlanerOutline = (props)=>(
    <div className="planer-box">
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
                <Task taskContent={"working!"} top={"0%"} length={"57.14%"} backGndColor={"#CEF1FB"}/>
                <Task taskContent={"dinner!"} top={"57.14%"} length={"10.71%"} backGndColor={"#E5CEFB"}/>
                <Task taskContent={"coding!"} top={"67.85%"} length={"32.15%"} backGndColor={"#FBE6CE"}/>
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

const PlanerHome = (props)=>(
    <div>
        This is Planerhome.
        <PlanerOutline/>
    </div>
)

export default PlanerHome;