const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
const request = require("request");

var mealBody = [];

let count = true;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home", { meal: mealBody, count: count });
});

app.post("/", function (req, res) {
  count = false;
  const ingredient = req.body.ingredient;
  var options = {
    method: "GET",
    url: "https://www.themealdb.com/api/json/v1/1/search.php?s=" + ingredient,
    headers: {
      Authorization: "Basic U2hhaGFiOjViYWIwOGNhZTA4NTU4YTRjYWM5NWZkZTU1ZmViYjdjLXVzMjE=",
    },
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    var apiResponse = JSON.parse(response.body);
    mealBody = apiResponse.meals;
    res.redirect("/");
  });
});


app.listen("3000" || process.env.PORT , function () {
  console.log("Server Started.");
});
