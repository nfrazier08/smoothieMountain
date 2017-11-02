var db_connect= require("../config/connection.js");

//Object Relational Mapper

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
        db_connect.query(`INSERT INTO ${selectTable} (smoothie_name) VALUES ('${nameSelected}')`,function(err, res){
            if (err) throw err;
            cb(res);
        })
    }, 

    //Update Smoothie Name
    updateName: function(selectTable, selectId, newName, cb){        
        console.log(selectTable)
        console.log(selectId)
        console.log(newName);
        db_connect.query(`UPDATE ${selectTable} SET smoothie_name = '${newName}' WHERE smoothie_id = ${selectId}`, function(err, res){
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