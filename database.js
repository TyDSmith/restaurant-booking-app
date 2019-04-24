// Dependencies
var express = require("express");
var mysql = require("mysql");
var path = require("path");


// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "finley",
  password: "password",
  database: "lions_den"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes
app.get("/database", function(req, res) {

  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  connection.query("SELECT * FROM reservations", function(err, result) {

    // We then begin building out HTML elements for the page.
    var html = "<h1><strong>Lions Den!!</strong></h1>";

    // Here we begin an unordered list.
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].reservation_id + "</p>";
      html += "<p>Name: " + result[i].name + " </p></li>";
      html += "<p>Email: " + result[i].email + " </p></li>";
      html += "<p>Phone: " + result[i].phone + " </p></li>";
      html += "<p>Party Size: " + result[i].party_size + " </p></li>";
    }

    // We close our unordered list.
    html += "</ul>";

    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});

/*app.get("/coolness-chart", function(req, res) {

    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    connection.query("SELECT * FROM actors ORDER BY coolness_points ASC", function(err, result) {
  
      // We then begin building out HTML elements for the page.
      var html = "<h1><strong>Seinfeld!!</strong></h1>";
  
      // Here we begin an unordered list.
      html += "<ul>";
  
      // We then use the retrieved records from the database to populate our HTML file.
      for (var i = 0; i < result.length; i++) {
        html += "<li><p> ID: " + result[i].actor_id + "</p>";
        html += "<p>Characters: " + result[i].name + " </p></li>";
        html += "<p>Coolness Points: " + result[i].coolness_points + " </p></li>";
      }
  
      // We close our unordered list.
      html += "</ul>";
  
      // Finally we send the user the HTML file we dynamically created.
      res.send(html);
    });
  });

  app.get("/attidude-chart/:att", function(req, res) {
    var chosen = req.params.att;
    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    connection.query("SELECT * FROM actors WHERE attidude = '" + chosen + "'", function(err, result) {
  
      // We then begin building out HTML elements for the page.
      var html = "<h1><strong>Seinfeld!!</strong></h1>";
  
      // Here we begin an unordered list.
      html += "<ul>";
  
      // We then use the retrieved records from the database to populate our HTML file.
      for (var i = 0; i < result.length; i++) {
        html += "<li><p> ID: " + result[i].actor_id + "</p>";
        html += "<p>Characters: " + result[i].name + " </p></li>";
        html += "<p>Attidude: " + result[i].attidude + " </p></li>";
      }
  
      // We close our unordered list.
      html += "</ul>";
  
      // Finally we send the user the HTML file we dynamically created.
      res.send(html);
    });
  });*/

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
