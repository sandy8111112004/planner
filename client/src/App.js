import React, {Component} from 'react';
import * as $ from 'axios';
import './reset.css';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PlannerHome from "./Components/PlannerHome";
import Home from "./Components/Home";

const Temp = (props)=>(
  <div>
    temp page
  </div>
)

class App extends Component {
  state = {
    allPlanners:[]
  }

  getAllPlanners = () =>{
    $.get(`/api/allPlanners`)
    .then((result) => {
      this.setState({allPlanners: result.data});
    })
  }

  componentDidMount(){
    $.get(`/api/allPlanners`)
    .then((result)=>{
      this.setState({allPlanners: result.data});
    })
  }

  // handleDelete = (id) =>{
  //   $.delete(`/api/allPlanners/${id}`)
  //   .then((result)=>{
  //     $.get(`/api/allPlanners`)
  //     .then((result) => {
  //       this.setState({allPlanners: result.data});
  //     })
  //   });
  // }

  render=()=>{
    return( 
        <BrowserRouter>
        <div>
            <Route exact path={'/'} render={()=><Home />} />
            {this.state.allPlanners.map((e,i)=>
              <Route exact path={`/planner/${e._id}`} component={PlannerHome} key={i}/>
            )}
            <Route exact path={'/planner'} component ={Temp} />
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
