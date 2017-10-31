var express = require("express");
var router = express.Router();

//REMINDER:
    //POST -- CREATE
    //GET -- READ
    //PUT -- UPDATE
    //DELETE -- DELETE


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
// router.get("/smoothie/:id", function(req, res){
//     var requestedSmoothieId = req.params.id
//     smoothieModel.selectOne("smoothies", requestedSmoothieId, function(data){
//         var smoothieObject = {
//             smoothies: data
//         };
//         console.log(smoothieObject);
//         res.render("index", smoothieObject);
//     })
// })

//POST NEW smoothie to database- CREATE
    //Use API in the route because you're interacting with the server
router.post("/api/smoothie", function(req, res){
    var newSmoothie = req.body
    smoothieModel.createOne(newSmoothie.createdNewSmoothie, function(data){
        var smoothieObject = {
            smoothies: data
        };
        //THIS IS NOT CONSOLING THE NEW SMOOTHIE ADDED, BUT RATHER A STRANGE DATA PACKET!
        console.log(smoothieObject);
        res.render("index", smoothieObject);
    })
})

//PUT- UPDATE new smoothie data the the database
    //Essentially here, you can update the name of a smoothie in the database
    //You will need a  GET and a PUT
    //STEP 1: Get one smoothie id and route to update page
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
    //I took out "smoothies" before newSmoothieName to check if it fixes SQL error
    var requestedSmoothieId = req.params.id;
    var newSmoothieName = req.body;
    smoothieModel.updateName("smoothies",newSmoothieName.createdNewSmoothieName, function(data){
        var smoothieObject = {
            smoothies: data
        };
        console.log(smoothieObject);
        res.render("index", smoothieObject);
    })
   
})


//PUT new slurp status to the database- UPDATE

//DELETE a smoothie- DELETE

// Export routes for server.js to use.
module.exports = router;