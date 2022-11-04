//rfc gives an easy start to a new file
import React from "react";

export default function Test({ firstName, lastName, email }) {
  return (
    <div>
      <h1>First Name: {firstName}</h1>
      <h1>Last Name: {lastName}</h1>
      <h1>email: {email}</h1>
      <hr />
    </div>
  );
}
