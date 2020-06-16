import React, {Component} from 'react';
import * as $ from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./PlannerHome.css";
import Popup from './Popup.js';

const Task =(props)=>(
    <div>
        <a href={`#${props.id}`}>
            <div className = "task-block" style={{"top": props.top, "height": props.length, "backgroundColor": props.backGndColor} }>
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
                <p className='center-box'>Time/Day</p>
            </div>
            <div className = 'day-col'>
                <p className='center-box'>Mon</p>
            </div>
            <div className = 'day-col'>
                <p className='center-box'>Tue</p>
            </div>
            <div className = 'day-col'>
                <p className='center-box'>Wed</p>
            </div>
            <div className = 'day-col'>
                <p className='center-box'>Thur</p>
            </div>
            <div className = 'day-col'>
                <p className='center-box'>Fri</p>
            </div>
            <div className = 'day-col'>
                <p className='center-box'>Sat</p>
            </div>
            <div className = 'day-col'>
                <p className='center-box'>Sun</p>
            </div>
        </div>
        <div className ='time-col'>
            {console.log(props.taskTime)}
            {props.taskTime !== null? Object.keys(props.taskTime).map((e,i)=>
                <TimeSlot time={e} timeTop={props.taskTime[e]} key = {i} />
            ):null}
        </div>
        <div className = 'day-col' id='Mon'>
            {props.existTasks.map((e,i)=>
                e.taskDay == 'Mon'?
                <Task id = {e._id} taskTitle = {e.taskTitle} taskContent = {e.taskContent} backGndColor = {e.taskBackGndColor} top={props.displayPattern[e._id].top} length={props.displayPattern[e._id].length} key = {i} />:
                null
            )}
        </div>
        <div className = 'day-col' id='Tue'>
            {props.existTasks.map((e,i)=>
                e.taskDay == 'Tue'?
                <Task id = {e._id} taskTitle = {e.taskTitle} taskContent = {e.taskContent} backGndColor = {e.taskBackGndColor} top={props.displayPattern[e._id].top} length={props.displayPattern[e._id].length} key = {i} />:
                null
            )}
        </div>
        <div className = 'day-col' id='Wed'>
            {props.existTasks.map((e,i)=>
                e.taskDay == 'Wed'?
                <Task id = {e._id} taskTitle = {e.taskTitle} taskContent = {e.taskContent} backGndColor = {e.taskBackGndColor} top={props.displayPattern[e._id].top} length={props.displayPattern[e._id].length} key = {i} />:
                null
            )}
        </div>
        <div className = 'day-col' id='Thur'>
            {props.existTasks.map((e,i)=>
                e.taskDay == 'Thur'?
                <Task id = {e._id} taskTitle = {e.taskTitle} taskContent = {e.taskContent} backGndColor = {e.taskBackGndColor} top={props.displayPattern[e._id].top} length={props.displayPattern[e._id].length} key = {i} />:
                null
            )}
        </div>
        <div className = 'day-col' id='Fri'>
            {props.existTasks.map((e,i)=>
                e.taskDay == 'Fri'?
                <Task id = {e._id} taskTitle = {e.taskTitle} taskContent = {e.taskContent} backGndColor = {e.taskBackGndColor} top={props.displayPattern[e._id].top} length={props.displayPattern[e._id].length} key = {i} />:
                null
            )}
        </div>
        <div className = 'day-col' id='Sat'>
            {props.existTasks.map((e,i)=>
                e.taskDay == 'Sat'?
                <Task id = {e._id} taskTitle = {e.taskTitle} taskContent = {e.taskContent} backGndColor = {e.taskBackGndColor} top={props.displayPattern[e._id].top} length={props.displayPattern[e._id].length} key = {i} />:
                null
            )}
        </div>
        <div className = 'day-col' id='Sun'>
            {props.existTasks.map((e,i)=>
                e.taskDay == 'Sun'?
                <Task id = {e._id} taskTitle = {e.taskTitle} taskContent = {e.taskContent} backGndColor = {e.taskBackGndColor} top={props.displayPattern[e._id].top} length={props.displayPattern[e._id].length} key = {i} />:
                null
            )}
        </div>
    </div>
)

const TimeOption = (props)=>(
    <option value={props.time}>{props.time}</option>
)

const PlannerNew = (props)=>(
    <div className="plannerNew-box">
        <div>
        <h3>New Event</h3>
        <div>
            <p>Day</p>
            <select name="taskDay" value={props.taskDay} onChange={props.changeHandler}>
                <option value="Mon">Monday</option>
                <option value="Tue">Tuesday</option>
                <option value="Wed">Wednesday</option>
                <option value="Thur">Thursday</option>
                <option value="Fri">Friday</option>
                <option value="Sat">Saturday</option>
                <option value="Sun">Sunday</option>
            </select>
        </div>
        <div>
            <p>Start Time</p>
            <select name="startTime" value={props.startTime} onChange={props.changeHandler}>
                {props.totalTimeList.map((e,i)=><TimeOption time={e} key={i}/>)}
            </select>
        </div>
        <div>
            <p>End Time</p>
            <select name="endTime" value={props.endTime} onChange={props.changeHandler}>
                {props.totalTimeList.map((e,i)=><TimeOption time={e} key={i}/>)}
            </select>
        </div>
        <div>
            <p>Task Title</p>
            <input name='taskTitle' value={props.taskTitle} onChange={props.changeHandler}></input>
        </div>
        <div>
            <p>Task Content</p>
            <input name='taskContent' value={props.taskContent} onChange={props.changeHandler}></input>
        </div>
        <div>
            <p>Background Color</p>
            <input name='taskBackGndColor' value={props.taskBackGndColor} onChange={props.changeHandler}></input>
        </div>
        <button name='plannerAddBtn' onClick={props.addHandler}>Add</button>
        </div>
    </div>
)

class PlannerHome extends Component{
    state = {
        taskDay:'Mon',
        taskTime:{},
        startTime:'1:00',
        endTime:'1:00',
        taskTitle:'',
        taskContent:'',
        taskBackGndColor:'',
        existTasks:[],
        plannerStart:'',
        plannerEnd:'',
        displayPattern:{},
        totalTimeList:['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00',
                       '13:00', '14:00', '15:00', '16:00','17:00','18:00','19:00','20:00','21:00','22:00', '23:00','0:00']
    }

    componentDidMount(){
        const url=window.location.href;
        const index = url.indexOf('planner/');
        const id = url.substring(index+8); 
        $.get(`/api/planner/${id}`)
        .then((result) => {
            let preTaskTime = {};
            let top = '';
            let length = '';
            let totalLength = parseFloat(result.data.plannerEnd) - parseFloat(result.data.plannerStart);
            let displayPattern = {};
            let minUnit = 100/(totalLength);
            let topEnd = '';
            result.data.existTasks.map(e=>{
                top = String((parseFloat(e.startTime)-parseFloat(result.data.plannerStart))*minUnit).concat("%");
                preTaskTime[e.startTime] = top;
                topEnd = String((parseFloat(e.endTime)-parseFloat(result.data.plannerStart))*minUnit).concat("%");
                preTaskTime[e.endTime] = topEnd;
                length = String((parseFloat(e.endTime) - parseFloat(e.startTime))*minUnit).concat("%");
                displayPattern[e._id]={top: top, length: length};
            });
            preTaskTime[result.data.plannerEnd] = "97%";
            preTaskTime[result.data.plannerStart] = "3%";
            

            this.setState({
                taskDay:'Mon',
                taskTime: preTaskTime,
                startTime:'1:00',
                endTime:'1:00',
                taskTitle:'',
                taskContent:'',
                taskBackGndColor:'',
                plannerEnd: result.data.plannerEnd,
                plannerStart: result.data.plannerStart,
                displayPattern: displayPattern,
                existTasks: result.data.existTasks
            });
        })
    }



    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    handleAdd = (e)=>{
        e.preventDefault();
        if(parseInt(this.state.startTime) >= parseInt(this.state.endTime)){
            return alert("Start time needs to be earlier than end time!");
        }else{
            let prev = this.state.taskTime;
            if (!prev.includes(this.state.startTime)){
                prev.push(this.state.startTime);
            }
            if (!prev.includes(this.state.endTime)){
                prev.push(this.state.endTime);
            }
            this.setState({
                taskTime: prev,
                taskDay:'Mon',
                startTime:'1:00',
                endTime:'1:00',
                taskTitle:'',
                taskContent:'',
                taskBackGndColor:''
            });
        }
    }

    render(){
        return(
            <div>
                <nav>
                <Link to={'/'} style={{ textDecoration: 'none' }}>Home    </Link> |  
                <Link to={'/planner'} style={{ textDecoration: 'none' }}>Planner   </Link>
                </nav>
                <h2 className="center-text big-bottom">Week Testing!</h2>
                <div className="planner-out-box">
                    <PlannerNew 
                        totalTimeList={this.state.totalTimeList} 
                        changeHandler={this.handleChange}
                        addHandler={this.handleAdd}
                        taskDay = {this.state.taskDay}
                        startTime = {this.state.startTime}
                        endTime = {this.state.endTime}
                        taskTitle = {this.state.taskTitle}
                        taskContent = {this.state.taskContent}
                        taskBackGndColor = {this.state.taskBackGndColor}
                    />
                    <PlannerOutline existTasks = {this.state.existTasks} displayPattern={this.state.displayPattern} taskTime={this.state.taskTime}/>
                </div>
            </div>
        )
    }
}

export default PlannerHome;