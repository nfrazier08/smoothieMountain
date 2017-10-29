var express = require("express");
var router = express.Router();

// Import the model (smoothie.js) to use its database functions.
var smoothieModel = require("../models/smoothieModel.js");

// Create all our routes and set up logic within those routes where required using the router
router.get("/", function(req, res){
    smoothieModel.selectAll(function(data){
        var smoothieObject = {
            smoothies:data
        };
        console.log(smoothieObject);
        res.render("index", smoothieObject)
    })
})


// smoothes.all(function(err, result) {
    
// })

// Export routes for server.js to use.
module.exports = router;