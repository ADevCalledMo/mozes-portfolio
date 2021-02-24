import React from "react";

const Contact = () => {
  return (
    <div className="s2">
      <div className="main-container">
        <h1 style={{ textAlign: "center" }}> Get in touch with me: </h1>

        <form id="contact-form">
        <label>Name</label>
        <input className="input-field" type="text" name="name" />

        <label>Subject</label>
        <input className="input-field" type="text" name="subject" />

        <label>Email</label>
        <input className="input-field" type="text" name="email" />

        <label>Message</label>
        <textarea className="input-field" type="text" name="message" />


          <input id="submit-btn" type="submit" value="send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
