import React from "react";

import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
     
      ></div>
      <div className="rightSide">
        <h1>Login</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Email</label>
          <input name="name" placeholder="Enter your email..." type="email" />
          <label htmlFor="email">Password</label>
          <input name="email" placeholder="Enter your password..." type="text" />
          <label htmlFor="message"></label>
         
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
