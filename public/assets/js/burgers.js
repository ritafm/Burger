// Make sure we wait to attach our handlers until the DOM is fully loaded.
    $(function() {
//     $(".submit").on("click", function(event) {
//         var id = $(this).data("id");
//         var newDevour = $(this).data("newdevour");

//         var newDevourState = {
//             devoured: newDevour
//         };
//         console.log(newDevourState);

//         // Send the PUT request
//         $.ajax("/api/burgers/" + id, {
//             type: "PUT",
//             data: newDevourState
//         }).then(
//             function() {
//                 alert("Mmmmm. That IS a TASTY burger!");
//                 // Reload the page to get the updated list
//                 location.reload();
//             }
//         );
//     });

    $(".submit").on("click", function(event) {
        event.preventDefault();
        
        var newBurger = {
            burgerName: $("#burger_name").val().trim()
        };
        console.log(newBurger);
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                alert("New burger--begging to be Devoured!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                alert("Burger has been 86'ed from the Menu!", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
