$( document ).ready(function() {
 
//Submit new smoothie 
$("#smoothieButton").on("click", function(){
    event.preventDefault();
    var newSmoothieDesired = $("#createSmoothie").val().trim();

    //Put created smoothie information into object
    var createdSmoothieInfo = {
        createdNewSmoothie: newSmoothieDesired
    }

        $.ajax({
            type: "POST",
            url: "/api/smoothie",
            data: createdSmoothieInfo,
            success: 
                location.reload()
        })
}) 

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

    $.ajax({        
        type:"PUT", 
        url: `/api/smoothie/${getThisSmoothieId}`, 
        data: newNameInfo,
        success:            
            location.href = "/"
        })
})

//Handle a click function for delete
$(".deleteButton").on("click", function(){
    console.log("Register Button Click");
    var thisDeleteId = $(this).attr('id');    
    console.log(thisDeleteId);

    $.ajax({
        type:"DELETE",
        url:`/api/smoothie/${thisDeleteId}`,
        success: 
            location.href = "/"
    })
})

})//End of the document.ready() function