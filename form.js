
var restarauntArray = [];


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

   console.log(restarauntArray);

   displayReservations(newReservation);
}

function displayReservations(newReservation){

    console.log("passed through")

    for(i=0;i<restarauntArray.length;i++){
        $('#display-reservations').append(restarauntArray[i].name)
    }

}