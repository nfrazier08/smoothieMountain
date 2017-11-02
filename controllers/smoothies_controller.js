var express = require("express");
var router = express.Router();

// Import the model (smoothie.js) to use its database functions.
var smoothieModel = require("../models/smoothieModel.js");

// Create all our routes and set up logic within those routes where required using the router

//READ the data- GET the smoothie data
router.get("/", function(req, res){
    smoothieModel.selectAll(function(data){
        var smoothieObject = {
            smoothies: data
        };
        console.log(smoothieObject);
        res.render("index", smoothieObject);
    })
})

//POST NEW smoothie to database- CREATE
    //Use API in the route because you're interacting with the server
router.post("/api/smoothie", function(req, res){
    var newSmoothie = req.body
    smoothieModel.createOne(newSmoothie.createdNewSmoothie, function(data){
        var smoothieObject = {
            smoothies: data
        };
        console.log(smoothieObject);
        res.render("index", smoothieObject);
    })
})

//PUT- UPDATE new smoothie data the the database
router.get("/smoothie/:id", function(req, res){
        var requestedSmoothieId = req.params.id; 
        smoothieModel.selectOne("smoothies", requestedSmoothieId, function(data){
            var smoothieObject = {
                smoothies: data
            };
            console.log("****");
            console.log(smoothieObject);
            res.render("update", smoothieObject);
        })
    })

router.put("/api/smoothie/:id", function (req, res){
    var smoothieId = req.params.id;
    var newName = req.body;
    
    console.log("Below is new name")
    console.log(newName)
    smoothieModel.updateName("smoothies", smoothieId, newName.createdNewSmoothieName, function(data){
        var smoothieObject = {
            smoothies: data
        };
        console.log(smoothieObject);
        res.render("index", smoothieObject);
    })   
})

//DELETE a smoothie- DELETE
router.delete("/api/smoothie/:id", function(req, res){
    var deleteId = req.params.id;
    smoothieModel.deleteOne(deleteId, function(data){     
        res.redirect("/")
    })
})

// Export routes for server.js to use.
module.exports = router;