// Question: What does this code do?
$("#form-submit").on("click", function(event) {
    console.log ("button Click")
      event.preventDefault();
      
      var newReservation = {
        name: $("#form-name").val().trim(),
        email: $("#form-email").val().trim(),
        phone: $("#form-phone").val().trim(),
        partySize: $("#form-party-size").val().trim()
      };
      console.log (newReservation);
      // Question: What does this code do??
      $.post("/api/reservations", newReservation)
        .then(function(data) {
          console.log("reservations.html", data);
          alert("Reservation Added...");
        });
    });