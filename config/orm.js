var db_connect= require("../config/connection.js");

//Object Relational Mapper
//You ORM is supposed to be less specific, with question marks for the queries and what have you
//The model is supposed to be more specific with what you are looking for
// ?? is used for table and column names, it escapes them with backticks. ? is for ordinary values.
// SELECT column1, column2, ...FROM table_name;
var orm = {
    //Select All Smoothie
    selectAll: function(selectTable, cb){
        db_connect.query("SELECT * FROM ??;", cb)
    },

    //Select One Smoothie
    selectOne: function(whatToSelect, selectTable, selectId, cb){
        db_connect.query("SELECT * FROM ?? WHERE ?? = ?;", cb)
    }, 

    //Create a Smoothie
    createOne: function(selectTable, nameSelect, cb){
        db_connect.query("INSERT INTO ?? (?) VALUES ?;", cb)
    }, 

    //Update Smoothie Name
    updateName: function(selectTable, selectName, newName, cb){
        db_connect.query("UPDATE ?? SET ? = ?;", cb)
    },

    //Update Slurp Status
    updateStatus: function(selectTable, selectId, selectStatus, cb){
        db_connect.query("UPDATE ?? SET ? = ? WHERE ? =?;", cb)
    },

    //Delete Smoothie
    deleteOne: function(selectTable, selectId, cb){
        db_connect.query("DELETE FROM ?? WHERE ? = ?;", cb)
    }
}





// * Export the ORM object in `module.exports`.
module.exports = orm;