//FRONT END WITH AXIOS IMPLEMENTATION
import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

//import e from "cors";

function App() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");
  /*
  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;
*/
  //axios req
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };
  /*
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
      console.log(response.data);
    });
  };
*/
  /*
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedInd == true) {
        {
          setLoginStatus(response.data.user[0].username);
        }
      }
    });
  }, []);
*/

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}>Register</button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Username..." />
        <input type="password" placeholder="Password" />
        <button>Register</button>
      </div>
    </div>
  );
}

export default App;
