
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

    }];

    console.log(restarauntArrayDummy);

    for(i = 0; i < restarauntArrayDummy.length; i++){
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
}

// function displaySpotCards() {
//     for (i = 0; i < 10; i++) {
//       spotName = spotArray[i].spotName;
//       spot = spotArray[i].spotId;
//       conditions = spotArray[i].windArray[12];
  
//       var singleCardDiv = "<div class='singleSurfSpotCard'>";
//       var singleCardDivRowOne = "<div class='cardRowOne' id='" + spot + "'>";
//       var singleCardNameOutput = "<div class='spot-name-output'>" + spotName;
//       var spotConditionsCardDiv =
//         "<div class='spot-conditions-card-div'> <span class='spot-conditions-tag tag-" +
//         conditions +
//         "'>" +
//         conditions +
//         "<span>";
//       var closeDiv = "</div>";
  
//       $(".surfSpotsList").append(
//         singleCardDiv +
//           singleCardDivRowOne +
//           singleCardNameOutput +
//           closeDiv +
//           closeDiv +
//           spotConditionsCardDiv +
//           closeDiv
//       );
//     }