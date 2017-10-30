$( document ).ready(function() {

 
//Submit new smoothie 
$("#smoothieButton").on("click", function(){
    event.preventDefault();
    var newSmoothieDesired = $("#createSmoothie").val().trim();

    //Pur created smoothie information into object
    var createdSmoothieInfo = {
        createdNewSmoothie: newSmoothieDesired
    }

    //THIS WORKS!!! GETTING CORRECT NEW SMOOTHIE CREATED!!
    console.log(createdSmoothieInfo);
        $.ajax({
            type: "POST",
            //Route for app.POST in apiRoutes
            url: "/api/smoothie",
            data: createdSmoothieInfo,
            success: 
                //THIS WORKS! you have a problem with your API POST call!!!
                console.log(createdSmoothieInfo)
                //Eventually, I will want to reload the page, 
                    //For now, check to see if you are getting the correct information upon AJAX success
                // location.reload()
        })
}) //End of create new smoothie click function




})//End of the document.ready() function