import React, {Component} from 'react';
import * as $ from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./PlannerHome.css";
import Popup from './Popup.js';

const Task =(props)=>(
    <div>
        <div className = "task-block" style={{"top": props.top, "height": props.length, "backgroundColor": props.backGndColor} }>
            <a className='task-block-link center-box' href={`#${props.id}`} >
                {props.taskTitle}
            </a>
        </div>
        <Popup taskTitle={props.taskTitle} taskContent={props.taskContent} id={props.id} taskDeleteHandler={props.taskDeleteHandler}/>
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
            {props.taskTime !== null? Object.keys(props.taskTime).map((e,i)=>
                <TimeSlot time={e} timeTop={props.taskTime[e][0]} key = {i} />
            ):null}
        </div>
        <div className = 'day-col' id='Mon'>
            {props.existTasks.map((e,i)=>
                e.taskDay == 'Mon'?
                <Task id = {e._id} taskDeleteHandler = {props.taskDeleteHandler} taskTitle = {e.taskTitle} taskContent = {e.taskContent} backGndColor = {e.taskBackGndColor} top={props.displayPattern[e._id].top} length={props.displayPattern[e._id].length} key = {i} />:
                null
            )}
        </div>
        <div className = 'day-col' id='Tue'>
            {props.existTasks.map((e,i)=>
                e.taskDay == 'Tue'?
                <Task id = {e._id} taskDeleteHandler = {props.taskDeleteHandler} taskTitle = {e.taskTitle} taskContent = {e.taskContent} backGndColor = {e.taskBackGndColor} top={props.displayPattern[e._id].top} length={props.displayPattern[e._id].length} key = {i} />:
                null
            )}
        </div>
        <div className = 'day-col' id='Wed'>
            {props.existTasks.map((e,i)=>
                e.taskDay == 'Wed'?
                <Task id = {e._id} taskDeleteHandler = {props.taskDeleteHandler} taskTitle = {e.taskTitle} taskContent = {e.taskContent} backGndColor = {e.taskBackGndColor} top={props.displayPattern[e._id].top} length={props.displayPattern[e._id].length} key = {i} />:
                null
            )}
        </div>
        <div className = 'day-col' id='Thur'>
            {props.existTasks.map((e,i)=>
                e.taskDay == 'Thur'?
                <Task id = {e._id} taskDeleteHandler = {props.taskDeleteHandler} taskTitle = {e.taskTitle} taskContent = {e.taskContent} backGndColor = {e.taskBackGndColor} top={props.displayPattern[e._id].top} length={props.displayPattern[e._id].length} key = {i} />:
                null
            )}
        </div>
        <div className = 'day-col' id='Fri'>
            {props.existTasks.map((e,i)=>
                e.taskDay == 'Fri'?
                <Task id = {e._id} taskDeleteHandler = {props.taskDeleteHandler} taskTitle = {e.taskTitle} taskContent = {e.taskContent} backGndColor = {e.taskBackGndColor} top={props.displayPattern[e._id].top} length={props.displayPattern[e._id].length} key = {i} />:
                null
            )}
        </div>
        <div className = 'day-col' id='Sat'>
            {props.existTasks.map((e,i)=>
                e.taskDay == 'Sat'?
                <Task id = {e._id} taskDeleteHandler = {props.taskDeleteHandler} taskTitle = {e.taskTitle} taskContent = {e.taskContent} backGndColor = {e.taskBackGndColor} top={props.displayPattern[e._id].top} length={props.displayPattern[e._id].length} key = {i} />:
                null
            )}
        </div>
        <div className = 'day-col' id='Sun'>
            {props.existTasks.map((e,i)=>
                e.taskDay == 'Sun'?
                <Task id = {e._id} taskDeleteHandler = {props.taskDeleteHandler} taskTitle = {e.taskTitle} taskContent = {e.taskContent} backGndColor = {e.taskBackGndColor} top={props.displayPattern[e._id].top} length={props.displayPattern[e._id].length} key = {i} />:
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
        plannerId:'',
        displayPattern:{},
        totalTimeList:['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00',
                       '13:00', '14:00', '15:00', '16:00','17:00','18:00','19:00','20:00','21:00','22:00', '23:00','0:00']
    }

    drawPlanner(plannerEnd, plannerStart, existTasks){
        let preTaskTime = {};
        let top = '';
        let length = '';
        let totalLength = parseFloat(plannerEnd) - parseFloat(plannerStart);
        let displayPattern = {};
        let minUnit = 100/(totalLength);
        preTaskTime[plannerEnd] = ["97%",1];
        preTaskTime[plannerStart] = ["3%",1];
        existTasks.map(e=>{
            top = String((parseFloat(e.startTime)-parseFloat(plannerStart))*minUnit).concat("%");
            Object.keys(preTaskTime).includes(e.startTime) ? preTaskTime[e.startTime][1] += 1:preTaskTime[e.startTime] = [top,1]; 
            length = String((parseFloat(e.endTime) - parseFloat(e.startTime))*minUnit).concat("%");
            displayPattern[e._id]={top: top, length: length};
            top = String((parseFloat(e.endTime)-parseFloat(plannerStart))*minUnit).concat("%");
            Object.keys(preTaskTime).includes(e.endTime) ? preTaskTime[e.endTime][1] += 1:preTaskTime[e.endTime] = [top,1]; 
        });
        
        return {taskTime: preTaskTime, displayPattern: displayPattern}
                
    }

    componentDidMount(){
        const url=window.location.href;
        const index = url.indexOf('planner/');
        const id = url.substring(index+8); 
        $.get(`/api/planner/${id}`)
        .then((result) => {
            let drawResult;
            drawResult = this.drawPlanner(result.data.plannerEnd, result.data.plannerStart, result.data.existTasks);
            this.setState({
                taskDay:'Mon',
                taskTime: drawResult.taskTime,
                startTime:'1:00',
                endTime:'1:00',
                taskTitle:'',
                taskContent:'',
                taskBackGndColor:'',
                plannerEnd: result.data.plannerEnd,
                plannerStart: result.data.plannerStart,
                displayPattern: drawResult.displayPattern,
                plannerId: id,
                existTasks: result.data.existTasks
            });
        })
    }

    handleTaskDelete = (taskID) =>{
        let prev = this.state.existTasks;
        let prevTime = this.state.taskTime;
        let indexToDel;
        let findObj;
        indexToDel = prev.findIndex(e=>e._id==taskID);
        findObj = prev.find(e=>e._id==taskID);
        prev.splice(indexToDel,1);
        prevTime[findObj.startTime][1] -= 1;
        if(prevTime[findObj.startTime[1]]===0){
            delete prevTime[findObj.startTime];
        }
        prevTime[findObj.endTime][1] -= 1;
        if(prevTime[findObj.endTime[1]]===0){
            delete prevTime[findObj.endTime];
        }
        this.setState({
            existTasks:prev,
            taskTime: prevTime
        });
        $.put(`/api/planner/${this.state.plannerId}`,{existTasks: prev})
        .then((result)=>{
        });
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    handleAdd = (e)=>{
        e.preventDefault();
        if(parseInt(this.state.startTime) >= parseInt(this.state.endTime)){
            return alert("Start time needs to be earlier than end time!");
        }else if(parseInt(this.state.startTime) < parseInt(this.state.plannerStart) || parseInt(this.state.startTime) > parseInt(this.state.plannerEnd)){
            return alert("Start time needs to be within planner's time range");
        }else if(parseInt(this.state.endTime) < parseInt(this.state.plannerStart) || parseInt(this.state.endTime) > parseInt(this.state.plannerEnd)){
            return alert("End time needs to be within planner's time range");
        }else{
            let prevTask = this.state.existTasks.slice();           
            prevTask.push(
            {   taskBackGndColor:this.state.taskBackGndColor, 
                taskTitle: this.state.taskTitle, 
                taskContent: this.state.taskContent, 
                taskDay: this.state.taskDay,
                startTime: this.state.startTime, 
                endTime:this.state.endTime
            });
            
            $.put(`/api/planner/${this.state.plannerId}`,{existTasks: prevTask})
            .then((result)=>{
                let drawResult;
                drawResult = this.drawPlanner(result.data.plannerEnd, result.data.plannerStart, result.data.existTasks);
                this.setState({
                    taskTime: drawResult.taskTime,
                    plannerEnd: result.data.plannerEnd,
                    plannerStart: result.data.plannerStart,
                    displayPattern: drawResult.displayPattern,
                    existTasks: result.data.existTasks
                });
            }
            );
            
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
                    <PlannerOutline 
                    existTasks = {this.state.existTasks} 
                    displayPattern={this.state.displayPattern} 
                    taskTime={this.state.taskTime}
                    taskDeleteHandler = {this.handleTaskDelete}
                    />
                </div>
            </div>
        )
    }
}

export default PlannerHome;