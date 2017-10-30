var express = require("express");
var router = express.Router();

// Import the model (smoothie.js) to use its database functions.
var smoothieModel = require("../models/smoothieModel.js");

// Create all our routes and set up logic within those routes where required using the router

//READ the data- GET the smoothie data
    //THIS WORKS!!!!
router.get("/", function(req, res){
    smoothieModel.selectAll(function(data){
        var smoothieObject = {
            smoothies: data
        };
        console.log(smoothieObject);
        res.render("index", smoothieObject);
    })
})

//GET one smoothie- READ the smoothie data
    //THIS WORKS!!!
router.get("/:id", function(req, res){
    var requestedSmoothieId = req.params.id
    smoothieModel.selectOne("smoothies", requestedSmoothieId, function(data){
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
    smoothieModel.createOne(newSmoothie, function(data){
        var smoothieObject = {
            smoothies: data
        };
        console.log(smoothieObject);
        res.render("index", smoothieObject);
    })
})

//PUT new smoothie data the the database- UPDATE


//PUT new slurp status to the database- UPDATE

//DELETE a smoothie- DELETE

// Export routes for server.js to use.
module.exports = router;