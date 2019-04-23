//Activity 6
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Reservations (DATA)
// =============================================================

var reservations = [
  {
    name: "Ty Smith 1",
    email: "Ty.Smith1@gmail.com",
    phone: 1111111111,
    partySize: 2,
  },
  {
    name: "Ty Smith 2",
    email: "Ty.Smith2@gmail.com",
    phone: 1111111111,
    partySize: 2,
  },
  {
    name: "Orlando",
    email: "Orlando3@gmail.com",
    phone: 1111111111,
    partySize: 4,
  },
  {
    name: "Orlando",
    email: "Orlando4@gmail.com",
    phone: 1111111111,
    partySize: 4,
  },
  {
    name: "Tommy",
    email: "Orlando5@gmail.com",
    phone: 1111111111,
    partySize: 4,
  },
  {
    name: "Tommy",
    email: "Orlando6@gmail.com",
    phone: 1111111111,
    partySize: 4,
  },
];


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserverations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});

// Displays all characters
app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

// Create New Characters - takes in JSON input
app.post("/api/reservations", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  console.log(newReservation);
  //newReservation(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
}); 

// MySQL

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "webuser",

  // Your password
  password: "secretPassword",
  database: "restaurant"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

function newReservation () {
  for (let i = 0; i < reservations.length; i++) {

    connection.query(
      "INSERT INTO reservations SET ?",
      {
          name: reservations[i].name,
          email: reservations[i].email,
          phone: reservations[i].phone,
          party_size: reservations[i].partySize 
      },
      function(err, res) {
          if (err) throw err;
          console.log(res.affectedRows + " products updated!\n");
          connection.end();
      });
  }
};

//newReservation();
