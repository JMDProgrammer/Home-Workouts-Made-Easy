//BACKEND INTEGRATION OF THE LOGIN PAGE. 
//ALSO CHECKS FOR THE ERRORS IN

const express = require("express");
const mysql = require("mysql");
const cors = require("cors")

const app = node();

//initializations
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "LogInSystem",
});


app.post('/register', (req, res) =>{

  const username = req.body.username
  const password = req.body.password
  
  //registers the details in the database.
  db.query("INSERT INTO users (username, password) VALUES (?,?)", 
  [username, password], 
  (err, result) => { console.log(err);}
  );
});

app.post('/login' , (req, res) => {
  const username = req.body.username
  const password = req.body.password

  //select every element in the database to check if the details are present.
  db.query("SELECT * FROM users WHERE username = ? AND password = ?", 
  [username, password], 
  (err, result) => { 
      if(err){
        console.log(err);
        res.send({err: err})
      }

      if(result){
         res.send(result);
      }
      else{
        res.send({message: "Wrong username/password combination!"})
      }
      
  });
});

app.listen(3001, () => {
  console.log("running server");
})