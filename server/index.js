const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// no such thing exists.  ???????????????????????????????????????????
//const config = require("./config");
const likeRoute = require("./routes/likeMethods");
const rankRoute = require("./routes/rankMethods");
// since this problem is its own ball of wax, i'll just let it NOT WORK for the time being while I get the server to actually run and host the build react project.
// fixing up the database config stuff can be another step

// config doesn't exist, so uri can't

// const uri = config.getSecretToken();

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

// uri doesn't exist because config doesn't
//
/*
mongoose
  .connect(uri)
  .then(function () {
    console.log("Moongose Connection Successful");
  })
  .catch(function (err) {
    console.log(err);
  });
  */

// ^ connecting mongoose after the server is alredy listening is a little funky because the server is unable as of yet to serve out any requests that'll involve any database connection.
// Hence, when it is done, I think it is more proper to connect mongoose before the server sits watching the port since such watchfullness is a lie given it is unprepared to actually do its job.
// That is, as a matter of style, dependencies should be taken care of BEFORE the things that depend on them get going.  Oftentimes, this is a hard requirement that'll jump in your face immediately
// but given node's asyncronicity, it should be taken care of as a matter of practice and style because connecting to mongoose after the server is already running and ready to serve out the routes that
// need a database would actually probably work.  It would just be dodgy.
