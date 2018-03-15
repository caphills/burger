$(function() {
  // eat a burger
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured:"true"
    };

    // Send the PUT request.
    $.ajax("/api/burg/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devoured to", newDevour);
        location.reload();
      }
    );
  });

  // add a burger
  $(".create-form").on("submit", function(event) {
        event.preventDefault();
   
       var newBurger = {
      burger_name: $("#new_burger").val().trim(),
      devoured: "false"
    };
    // Send the POST request.
    $.ajax("/api/burg", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });

});