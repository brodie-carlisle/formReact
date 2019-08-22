import React, { Component } from "react";
import "../Users.css";

const Users = ({ getContacts }) => {
  
  fetch("http://localhost:3000/")
  .then(function(response) {
    return response.json();
  })
  const contacts = getContacts().map(contact => (
    <div>
      {contact.firstName} {contact.lastName}
    </div>
  ));
  return (
    <div className="userPage">
      <h1>Users:</h1>
      {contacts}
    </div>
  );
};

export default Users;
