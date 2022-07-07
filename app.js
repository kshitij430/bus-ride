// CORE MODULES
const express = require("express");

// THIRD PARTY MODULES
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// MY OWN MODULES
const app = express();
const globalErrorHandler = require(path.join(__dirname, "utils", "globalErrorHandler"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// parse cookie into req object
app.use(cookieParser());

// server all static files in public folder
app.use(express.static("public"));

// MINI ROUTERS
const busRoute = require(path.join(__dirname, "route", "busRoute.js"));
const userRoute = require(path.join(__dirname, "route", "userRoute.js"));

//MOUNTING ROUTER
app.use("/api/v1/bus", busRoute);
app.use("/api/v1/user", userRoute);

// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

module.exports = app;
