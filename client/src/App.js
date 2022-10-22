import './App.css';
import { useState } from 'react';


function App() {

  const[usernameReg, setUsernameReg] = useState('')
  const[passwordReg, setPasswordReg] = useState('')



  return (
    <div className="App">
      <div className="Registration">
          <h1>Registration</h1>
          <label>Username</label>
          <input type = "text"/>
          <label>Password</label>
          <input type = "text"/>
          <button>Register</button>
      </div>
      <div className="Login">
          <h1>Login</h1>
          <label>Username</label>
          <input type = "text" placeholder='Username...'/>
          <label>Password</label>
          <input type = "text" placeholder='Password...'/>
          <button>Login</button>
      </div>
    </div>

  );
}
export default App;
