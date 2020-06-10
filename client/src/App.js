import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PlanerHome from "./Components/PlanerHome";
import Home from "./Components/Home";
import './reset.css';
import './App.css';

class App extends Component {
  render=()=>{
    return( 
        <BrowserRouter>
        <div>
            <Route exact path={'/'} render={()=><Home />} />
            <Route exact path={"/planer"} component={PlanerHome}/>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
