import React, {Component} from 'react';
import * as $ from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./Popup.css"

const Popup = (props) =>(
    <div className="popup" id="popup">
        <div className="popup__content">
            Testing?
            <a href="#planner-box" class="popup__close">&times;</a>
            werwekjhsdlkfjshwoieuhfsdjhflekwhlkjsh
        </div>
    </div>
)

export default Popup;