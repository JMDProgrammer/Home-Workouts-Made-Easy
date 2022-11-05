//BACKEND INTEGRATION OF THE LOGIN PAGE.
//ALSO CHECKS FOR THE ERRORS IN

//const express = require("express");
//const mysql = require("mysql");
//const cors = require("cors");

/*
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;
*/
//const app = node();

//initializations
//app.use(express.json());
//app.use(
//  cors({
//   origin: ["http://localhost:3001"],
//   methods: ["GET", "POST"],
//   credentials: true,
//  })
//);

//app.use(cookieParser());
//app.use(bodyParser.urlencoded({ extended: true }));

/*
app.use(
  session({
    key: "userId",
    secret: "workout",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);
*/
//const db = mysql.createConnection({
//  user: "root",
//  host: "localhost",
//  password: "Guitarman32",
//  database: "workoutdb",
//});
/*
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  //hashing function for the user's password using bcrypt
  bcrypt.hash(password, saltRounds, (err, hash) => {
    //registers the details in the database.

    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users (username, password) VALUES (?,?)",
      [username, hash], //pass the hashed version of the variable.
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  //select every element in the database to check if the details are present.
  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist!" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});
*/
