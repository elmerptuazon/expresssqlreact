const express = require("express");
const app = express();

var { userCredentials } = require("./LoginController/loginuser");

app.get("/home", userCredentials);

app.listen(3000, () => console.log("PORT: 3000"));
