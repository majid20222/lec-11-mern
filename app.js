const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const accountRoutes = require("./routes/account-routes");

const app = express();

// Solving Cross Origin Resource Sharing Issue by all
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //  access to server of all origin
  res.setHeader("Access-Control-Allow-Methods", "GET"); // allowing access of only get method at Broswer
  next();
});

app.use(express.json()); // Body Parser using Express

app.use("/account", accountRoutes); // Registering Routes in main app

app.use((req, res, next) => {
  res.status(404).json({ message: "resource not found" });
  res.end();
});

mongoose.connect("mongodb://localhost:27017/newStore", () => {
  app.listen(3000, () => {
    console.log("Started listening at port 3000");
  });
});
