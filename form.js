
var restarauntArray = [];

var restarauntArrayDummy = [{
    name : 'John Smith',
    email : 'jsmith@test.com',
    phone : '555-235-5524',
    partySize : '4'
},
{ name : 'Tony Brown',
email : 'tbrown@test.com',
phone : '555-835-5775',
partySize : '3'
},
{ name : 'Alex Grey',
email : 'tbrown@test.com',
phone : '555-835-5775',
partySize : '3'
},
{ name : 'John Blue',
email : 'tbrown@test.com',
phone : '555-835-5775',
partySize : '3'
},
{ name : 'Tony Green',
email : 'tbrown@test.com',
phone : '555-835-5775',
partySize : '3'
},
{ name : 'Guy Red',
email : 'tbrown@test.com',
phone : '555-835-5775',
partySize : '3'
},
{ name : 'Rob Black',
email : 'tbrown@test.com',
phone : '555-835-5775',
partySize : '3'
}
];

function setup(){
$('#success-message').hide();
};


function submitFormInfo(){
   var name = $('#form-name').val();
   var email = $('#form-email').val();
   var phone = $('#form-phone').val();
   var partySize = $('#form-party-size').val();

   var newReservation = {
       name : name,
       email : email,
       phone : phone,
       partySize : partySize
   };

   restarauntArray.push(newReservation);

   $('#success-message').show();
   console.log(restarauntArray);

}

function displayReservations(newReservation){

    

    console.log(restarauntArrayDummy);

    for(i = 0; i < 5; i++){
        var closeDiv = "</div>";

        var singleReservationCard = "<div class='singleReservationCard'>";
        var singleResNameOutput = "<div class='reservationNameOutput'>" + restarauntArrayDummy[i].name + closeDiv;
        var singleResEmailOutput = "<div class='reservationEmailOutput'>" + restarauntArrayDummy[i].email + closeDiv;
        var singleResPhoneOutput = "<div class='reservationPhoneOutput'>" + restarauntArrayDummy[i].phone + closeDiv;
        var singleResPartySizeOutput = "<div class='reservationPartySizeOutput'> Party of: " + restarauntArrayDummy[i].partySize + closeDiv;
        
        
        $('#display-reservations').append(
            singleReservationCard + 
            singleResNameOutput +
            singleResEmailOutput +
            singleResPhoneOutput +
            singleResPartySizeOutput 
            );
    }

    if(restarauntArrayDummy.length > 4){
        console.log('working');
        $('#display-reservations').append(
            "<div id='display-waitlist'><h2>Waitlist<h2></div>"
            
            );

        for(i = 5; i < restarauntArrayDummy.length; i++){
            var closeDiv = "</div>";

            var singleReservationCard = "<div class='singleReservationCard'>";
            var singleResNameOutput = "<div class='reservationNameOutput'>" + restarauntArrayDummy[i].name + closeDiv;
            var singleResEmailOutput = "<div class='reservationEmailOutput'>" + restarauntArrayDummy[i].email + closeDiv;
            var singleResPhoneOutput = "<div class='reservationPhoneOutput'>" + restarauntArrayDummy[i].phone + closeDiv;
            var singleResPartySizeOutput = "<div class='reservationPartySizeOutput'> Party of: " + restarauntArrayDummy[i].partySize + closeDiv;
         
            
            $('#display-waitlist').append(
                singleReservationCard + 
                singleResNameOutput +
                singleResEmailOutput +
                singleResPhoneOutput +
                singleResPartySizeOutput 
                );
        }
    }
}
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
