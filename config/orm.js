var db_connect= require("../config/connection.js");

//Object Relational Mapper
//You ORM is supposed to be less specific, with question marks for the queries and what have you
//The model is supposed to be more specific with what you are looking for
// ?? is used for table and column names, it escapes them with backticks. ? is for ordinary values.
// SELECT column1, column2, ...FROM table_name;
var orm = {
    //Select All Smoothie
    selectAll: function(selectTable, cb){
        db_connect.query(`SELECT * FROM ${selectTable}`, function(err, res){
            if(err) throw err;
            cb(res);
        })
    },

    //Select One Smoothie
    selectOne: function(selectTable, selectId, cb){
        db_connect.query(`SELECT * FROM ${selectTable} WHERE smoothie_id = ${selectId}`, function(err, res){
            if(err) throw err;
            cb(res);
        })
    }, 

    //Create a Smoothie
    createOne: function(selectTable, nameSelected, cb){
        db_connect.query(`INSERT INTO ${selectTable} (smoothie_name) VALUES ${nameSelected}`, function(err, res){
            if (err) throw err;
            cb(res);
        })
    }, 

    //Update Smoothie Name
    updateName: function(selectTable, selectId, newName, cb){
        db_connect.query(`UPDATE ${selectTable} SET smoothie_name = ${newName} WHERE smoothie_id = ${selectId}`, function(err, res){
            if (err) throw err;
            cb(res);
        })
    },

    //Update Slurp Status
    updateStatus: function(selectTable, selectId, selectStatus, cb){
        db_connect.query(`UPDATE ${selectTable} SET smoothie_slurped = ${selectStatus} WHERE smoothie_id =${selectId}`, function(err, res){
            if (err) throw err;
            cb(res);
        })
    },

    //Delete Smoothie
    deleteOne: function(selectTable, selectId, cb){
        db_connect.query(`DELETE FROM ${selectTable} WHERE smoothie_id= ${selectId}`, function(err, res){
            if (err) throw err;
            cb(res);
        })
    }
}

// * Export the ORM object in `module.exports`.
module.exports = orm;