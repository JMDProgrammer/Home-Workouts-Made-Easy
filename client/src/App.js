//FRONT END WITH AXIOS IMPLEMENTATION

import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import e from 'cors';

function App() {

  const[usernameReg, setUsernameReg] = useState('')
  const[passwordReg, setPasswordReg] = useState('')

  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

//axios req
  const register = () => {
      Axios.post('http://localhost:3001/register', {username: usernameReg, password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  }

  const login = () => {
    Axios.post('http://localhost:3001/login', {username: username, password: password,
  }).then((response) => {

    if(response.data.message){
      setLoginStatus(response.data.message)
    }
    else{
      setLoginStatus(response.data[0].username)
    }
    console.log(response.data);
  });
}


  return (
    //registration and login section
    <div className="App">
      <div className="Registration">
          <h1>Registration</h1>

          <label>Username</label>
          <input type = "text" 
            onChange={(o) => {setUsernameReg(e.target.value);}}/>

          <label>Password</label>
          <input type = "text"
            onChange={(o) => {setPasswordReg(e.target.value);}}/>

          <button onClick={register}>Register</button> 

    </div>

    <div className="Login">

          <h1>Login</h1>
          <label>Username</label>
          <input type = "text" placeholder='Username...'
          onChange={(o) => {setUsername(e.target.value);}} />

          <label>Password</label>
          <input type = "text" placeholder='Password...'
          onChange={(o) => {setPassword(e.target.value);}}/>

          <button onClick={login} >Login</button>

      </div>

    <h1>loginStatus</h1>

    </div>
  );
}
export default App;
