$( document ).ready(function() {

 
//Submit new smoothie 
$("#smoothieButton").on("click", function(){
        event.preventDefault();
        var newSmoothieCreated = $("#createSmoothie").val().trim();
        //THIS WORKS!!! GETTING CORRECT NEW SMOOTHIE CREATED!!
        console.log(newSmoothieCreated);


// $.ajax({
//             type: "POST",
//             //Route for app.POST in apiRoutes
//             url: "/api/smoothie",
//             data: newSmoothie,
//             success: 
//             console.log()
//             // location.reload()
//     })
})




})//End of the document.ready() function