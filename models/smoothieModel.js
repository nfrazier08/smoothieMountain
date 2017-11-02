var orm = require("../config/orm.js");

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
        orm.selectOne(tableNeeded, smoothieId, function(res){
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
    updateName: function(selectTable, newSmoothieName, smoothieId, cb){
        orm.updateName("smoothies", newSmoothieName, smoothieId, function(res){
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

 