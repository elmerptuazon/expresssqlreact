const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");
//ISSUE IS NEED TO REFRESH TWICE TO SEE RESULTS

//controller functions
var { userCredentials } = require("./LoginController/loginuser");

app.get("/", (req, res) => {
    res.render('Main/home');
});

app.get("/home", userCredentials);

app.listen(3000, () => console.log("PORT: 3000"));
