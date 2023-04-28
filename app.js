const express = require("express");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/public", (req, res) => {
  // // res.set("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Content-Type");
  res.send({ message: "public information about all dog breeders in area" });
});

app.listen(3005, () => {
  console.log("listening on port 3005");
});
