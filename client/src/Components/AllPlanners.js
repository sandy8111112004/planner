import React, {Component} from 'react';
import * as $ from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const WeekBlock = (props) =>(
    <div>
        <Link to={`/planner/${props.id}`} style={{ textDecoration: 'none' }}> {props.id}</Link>
    </div>
)

const DisplayAllPlanners = (props)=>(
    <div>
        All Planners
        {props.allPlanners !== null? 
        props.allPlanners.map((e,i) => <WeekBlock id={e._id} key = {i}/>): 
        null}
    </div>
)


class AllPlanners extends Component{
    state={
        allPlanners:[]
    }

    componentDidMount(){
        $.get('/api/allPlanners')
        .then((result)=>{
            this.setState({
                allPlanners: result.data
            })
        });
    }

    render(){
        return(
            <div>
                <nav>
                <Link to={'/'} style={{ textDecoration: 'none' }}>Home    </Link> |  
                <Link to={'/planner'} style={{ textDecoration: 'none' }}>Planner   </Link>
                </nav>
                <DisplayAllPlanners 
                    allPlanners = {this.state.allPlanners}
                />
            </div>
        )
    }

}
export default AllPlanners;