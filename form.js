
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
   
   console.log(restarauntArray)
}