const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlannerSchema = new Schema(
    {
        title:{
            type: String,
            required: "You must have a title"
        }, 
        content:{
            type: String
        },
        plannerDay:{
            type: String,
            required: "Day is required"
        },
        plannerTime:{
            type:　String
        }
    }
);

let Planner = mongoose.model("Planner", PlannerSchema);

module.exports = Planner;