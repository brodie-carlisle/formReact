import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Users.css";

const Users = ({ getContacts }) => {
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
