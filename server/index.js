const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// const config = require("./config"); // //I hve not made this, yet. Still deciding which route I want to go on some things. //
const likeRoute = require("./routes/likeMethods");
const rankRoute = require("./routes/rankMethods");
// const uri = config.getSecretToken(); //

const app = express();
const Port = process.env.PORT || 3600;

const path = require("path");

let production = process.argv.findIndex(el => el == "--production") !== -1;

console.log("production: ", production);

if(production) {
    console.log("we're running in a production(heroku) environment!");
}

let clientStaticPath = production ? path.join(__dirname, "..", "build") : "";


if(clientStaticPath !== "") {
  console.log("clientStaticPath", clientStaticPath);
  app.use(express.static(clientStaticPath));
}


const routes = app => {
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};

module.exports = routes;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  return res.json({ message: "Server Running" });
});

app.use("/likes", likeRoute);
app.use("/ranks", rankRoute);
app.listen(Port, () => {
  console.log(`Server Running ${Port}`);
});