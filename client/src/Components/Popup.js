import React, {Component} from 'react';
import * as $ from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./Popup.css"

const Popup = (props) =>(
    <div className="popup" id={props.id}>
        <div className="popup__content">
            <a href="#planner-box" className="popup__close">&times;</a>
            <h1>{props.taskTitle}</h1>
            <p>{props.taskContent}</p>
        </div>
    </div>
)

export default Popup;