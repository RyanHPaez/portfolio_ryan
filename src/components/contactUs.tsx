import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// @ts-ignore


// npm i @emailjs/browser

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bz4fh4l",
        "template_6shy2gd",
        // @ts-ignore
        form.current,
        "W-vaWK4-NqU0G9eYL"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("message sent")
        },
        (error) => {
          console.log(error.text);
          alert('no message was sent')
        }
      );
  };

  return (
    
      <form className="email"
// @ts-ignore
      ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">Name<span className="required-field">*</span></label>
        <input type="text" name="user_name" required/>
        <label htmlFor="user_email">Your Email<span className="required-field">*</span></label>
                <input type="email" id="email" name="user_email"  required/>
        <label >Message</label>
        <textarea name="message" />
        <input type="submit" id="submit" value="Send" required/>
      </form>
    
  );
};

export default ContactUs;

