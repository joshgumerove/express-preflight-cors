const express = require("express");
const app = express();
// const basicAuth = require("express-basic-auth");
// app.use(
//   basicAuth({
//     users: { admin: "supersecret" },
//   })
// );
function isAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (auth === "password") {
    next();
  } else {
    res.status(401);
    res.send({ message: "Access Forbidden" });
  }
}

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.get("/public", isAuth, (req, res) => {
  // // res.set("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Content-Type");
  res.send({ message: "public information about all dog breeders in area" });
});

app.listen(3005, () => {
  console.log("listening on port 3005");
});
