var db_connect= require("../config/connection.js");


var orm = {
    //Select all smoothies
    selectAll: function(selectTable, cb){
        db_connect.query(`SELECT * FROM ${selectTable};`, (err, res) => {
            if(err) throw(err);
            cb(res);
        })        
    },

    //Select one smoothie
    selectOne: function(selectTable, selectId, cb){
        db_connect.query(`SELECT * FROM ${selectTable} WHERE smoothie_id = ${selectId};`, (err, res) => {
            if (err) throw(err);
            cb(res);
        })
    },

    //Create a smoothie
    createSmoothie: function(smoothie_name, cb){
        db_connect.query(`INSERT INTO smoothies (smoothie_name) VALUES ${smoothie_name};`, (err, res) => {
            if(err) throw (err);
            console.log(`Smoothie name ${smoothie_name} has been created`)
            cd(res);
        })
    },

    //Update if smoothie name
    updateSmoothie: function(smoothieId, newSmoothieName, cb){
        db.connect.query(`UPDATE smoothies SET smoothie_name = ${newSmoothieName} WHERE smoothie_id = ${smoothieId};`, (err, res) => {
            if(err) throw (err);
            console.log(`Smoothie ${smoothieId} has been updated with the name ${newSmoothieName}`)
            cb(res);
        })
    },

    //Update slurp status
    smoothieSlurped: function(smoothieId, slurpStatus, cb){
        db_connect.query(`UPDATE smoothies SET smoothie_slurped = ${slurpStatus} WHERE smoothie_id = ${smoothieId};`, (err, res) => {
            if(err) throw (err);
            console.log(`${smoothieId} Smoothie has been slurped!`)
            cb(res);
        })
    }, 

    //Delete smoothie
    deleteSmoothie: function(smoothieId, cb){
        db_connect.query(`DELETE FROM smoothies WHERE smoothie_id = ${smoothieId};`, (err, res) => {
            if (err) throw (err);
            console.log(`${smoothieId} Smoothie has been deleted!`)
            cb (res);
        })
    }
}

// * Export the ORM object in `module.exports`.
module.exports = orm;