import React, {Component} from 'react';
import * as $ from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./PlanerHome.css"

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
            <div className='start-time'>8:00</div>
            <div className='end-time'>22:00</div>
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