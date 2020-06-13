import React, {Component} from 'react';
import * as $ from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Navigation = (props)=>(
    <span>
        <Link to={"/"}>Home</Link> |
        <Link to={"/planner"}>Planner</Link>
    </span>
)

const Footer = (props)=>(
    <div>
        This is footer
    </div>
)

const Home = (props)=>(
    <div>
        <nav>
            <Navigation/>
        </nav>
        <div>
            Welcome!!!! Ming
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
)

export default Home;