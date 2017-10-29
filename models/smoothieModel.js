var orm = require("../config/orm.js");

//create the code that will call the ORM functions using smoothie specific input for the ORM.
//The model is supposed to be more specific with our queries and what we are looking for
var smoothieModel = {
    //Call orm for all
    selectAll: function(tableNeeded, cb){
        orm.selectAll("smoothies",tableNeeded, function(res){
            cb(res);
        });
    }, 
    
    //Call orm for one
    selectOne: function(tableNeeded, smoothieId, cb){
        orm.selectOne("smoothies", tableNeeded, smoothieId, function(res){
            cb(res);
        });
    }, 

    //Call orm for createOne
    createOne: function(smoothieName, cb){
        orm.createOne("smoothies", smoothieName, function(res){
            cb(res);
        });
    },

    //Call orm to updateName
    updateName: function(smoothieId, newSmoothieName, cb){
        orm.updateName("smoothies", smoothieId, newSmoothieName, function(res){
            cb(res);
        });
    },

    //Call orm to update slurp status
    updateStatus: function(smoothieId, slurpStatus, cb){
        orm.updateStatus("smoothies", smoothieId, slurpStatus, function(res){
            cb(res);
        });
    },

    //Call orm to delete a smoothie
    deleteOne:function(smoothieId, cb){
        orm.deleteOne("smoothies", smoothieId, function(res){
            cb(res);
        })
    }
}


module.exports = smoothieModel;

 