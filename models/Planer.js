const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlanerSchema = new Schema(
    {
        title:{
            type: String,
            required: "You must have a title"
        }, 
        content:{
            type: String
        },
        planerDay:{
            type: String,
            required: "Day is required"
        },
        planerTime:{
            type:　String
        }
    }
);

let Planer = mongoose.model("Planer", PlanerSchema);

MSFIDOCredentialAssertion.exports = Planer;