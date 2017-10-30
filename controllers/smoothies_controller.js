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
    // NO! smoothieModel.createOne(newSmoothie, function(data){
    //NO! smoothieModel.createOne("smoothies",newSmoothie, function(data){
    // What are you trying to get from AJAX???
        //Pass in the newSmoothie, which is the body on the request and you are targetting the name, 
            //Which was defined in createdNewSmoothie, after value was trimmed
            //Getting SQL  SYNTAX ERROR
                //SQL ERROR FIXED!!!
    smoothieModel.createOne(newSmoothie.createdNewSmoothie, function(data){
        var smoothieObject = {
            smoothies: data
        };
        //THIS IS NOT CONSOLING THE NEW SMOOTHIE ADDED, BUT RATHER A STRANGE DATA PACKET!
        console.log(smoothieObject);
        res.render("index", smoothieObject);

        //You can add: PULLED FROM CATS ASSIGNMENT- NOT SURE IF NEEDED
        // if (result.changedRows == 0) {
        //     // If no rows were changed, then the ID must not exist, so 404
        //     return res.status(404).end();
        //   } else {
        //     res.status(200).end();
    })
})

//PUT- UPDATE new smoothie data the the database
    //Essentially here, you can update the name of a smoothie in the database
router.put("/api/smoothie/:id", function (req, res){
    var requestedSmoothieId = req.params.name;
    smoothieModel.
})


//PUT new slurp status to the database- UPDATE

//DELETE a smoothie- DELETE

// Export routes for server.js to use.
module.exports = router;