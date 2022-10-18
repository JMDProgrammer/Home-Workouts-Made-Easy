// building the nodejs and express server

//this variable express will be an instance of the express framework
const express = require("express");

//this is how we initialize app, which will then allow us to:
//- makes apr requests initialize our server
//and app being an instance of express
//these two lines of code are bassically the standard when calling an api
const app = express();

//to start the api app.listen(insert port number here)
//chose whichever port you want, make it different than the port that we use to initialize the react application
app.listen(3001, () => {
  //after the 3001, we are passing an anonymous function that will run whenever the server is running
  //TO TEST THIS CODE ----> node index.js
  console.log("server running on port 3001");
  //can also test this by putting this into google chrome's search bar:
  //                                            http://localhost:3001/
});
