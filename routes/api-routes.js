const Planner = require("../models/Planner");
const mongoose = require("mongoose");

module.exports = function(app){
    app.get("/api/allPlanners", function(req, res){
        Planner.find({})
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            res.json(err);
        })
    });

    app.post("/api/planner", function(req,res){
        Planner.create(req.body)
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            res.json(err);
        })
    });

    app.delete("/api/planner/:id", function(req,res){
        Planner.deleteOne({"_id": mongoose.Types.ObjectId(req.params.id)})
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            res.json(err);
        })
    });

    app.put("/api/planner/:id", function(req,res){
        Planner.findOneAndUpdate({"_id": mongoose.Types.ObjectId(req.params.id) }, 
        { 
            title: req.body.title,
            content: req.body.content,
            plannerDay: req.body.plannerDay,
            plannerTime: req.body.plannerTime
        }, {returnOriginal: false})
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            res.json(err);
        });
    });

}