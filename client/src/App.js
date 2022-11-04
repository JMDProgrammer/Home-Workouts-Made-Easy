import React, { useState } from "react";
import "./App.css";
//import Test from "./Components/Test";

function App() {
  const username = "pedro123";
  const password = "password";

  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPaswordState] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    if (usernameState === username && passwordState === password)
      setLoggedIn(true);
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <input
        type="text"
        onChange={(event) => {
          setUsernameState(event.target.value);
        }}
      />
      <input
        type="password"
        onChange={(event) => {
          setPaswordState(event.target.value);
          console.log(event.target.value);
        }}
      />
      <button onClick={login}>Submit</button>
      {loggedIn && <h1>Logged In</h1>}
    </div>
  );
}

export default App;
