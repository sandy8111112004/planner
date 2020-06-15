const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlannerSchema = new Schema(
    {   
        plannerStart:{
            type: String,
            required: "need to specified the start time"
        },
        plannerEnd:{
            type: String,
            required: "need to specified the end time"
        },
        existTasks: [{
            taskTitle:{
                type: String,
                required: "You must have a title"
            }, 
            taskContent:{
                type: String
            },
            taskDay:{
                type: String,
                required: "Day is required"
            },
            startTime:{
                type:　String,
                required: "start time is required"
            }, 
            endTime:{
                type: String,
                required: "end time is requried"
            },
            taskBackGndColor:{
                type: String,
                default: '#777777'
            }
        }]
    }
);

let Planner = mongoose.model("Planner", PlannerSchema);

module.exports = Planner;