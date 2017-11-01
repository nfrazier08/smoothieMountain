$( document ).ready(function() {
    //POST -- CREATE
    //GET -- READ
    //PUT -- UPDATE
    //DELETE -- DELETE
 
//Submit new smoothie 
$("#smoothieButton").on("click", function(){
    event.preventDefault();
    var newSmoothieDesired = $("#createSmoothie").val().trim();

    //Put created smoothie information into object
    var createdSmoothieInfo = {
        createdNewSmoothie: newSmoothieDesired
    }

    //THIS WORKS!!! GETTING CORRECT NEW SMOOTHIE CREATED!!
    // console.log(createdSmoothieInfo);
        $.ajax({
            type: "POST",
            //Route for app.POST in apiRoutes
            url: "/api/smoothie",
            data: createdSmoothieInfo,
            success: 
                // THIS WORKS! you have a problem with your API POST call!!!
                // console.log(createdSmoothieInfo)
                //Eventually, I will want to reload the page, 
                    //For now, check to see if you are getting the correct information upon AJAX success
                location.reload()
        })
}) //End of create new smoothie click function



//Create a click function handler with an ajax response that will lead to the update url
$("#updateNameButton").on("click", function(){
    event.preventDefault();

    var getThisSmoothieId = $(this).attr('thisSmoothieId');
    console.log(getThisSmoothieId);
    var newSmoothieNameChosen = $("#updateName").val().trim();
    console.log(newSmoothieNameChosen);
   
    // //Put created smoothie name information into an object for the database
    var newNameInfo = {
            createdNewSmoothieName: newSmoothieNameChosen
    }

    // // //Set up AJAX HERE!!!
    $.ajax({
        //PUT is for UPDATE in CRUD
        type:"PUT", 
        url: `/api/smoothie/${getThisSmoothieId}`, 
        data: newNameInfo,
        success:
            // console.log(newNameInfo)
            location.href = "/"
            //Let User know the name has been changed and route back to main smoothie page
    })
})

//Handle a click function for delete
$(".deleteButton").on("click", function(){
    console.log("Register Button Click");
    var thisDeleteId = $(this).attr('id');    
    console.log(thisDeleteId);

    //Set up AJAX HERE!!!
    $.ajax({
        //DELETE for CRUD
        type:"DELETE",
        url:`/api/smoothie/${thisDeleteId}`,
        success: 
            location.href = "/"
    })
})


})//End of the document.ready() function