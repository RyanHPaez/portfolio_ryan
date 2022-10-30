import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import ContactUs from "./contactUs";

function Contact() {
  return (
    <motion.div
      className="Contact justify-content-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        },
        scale: {
          type: "spring",
          damping: 20,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <div className="contact my-5 justify-content-center">
        <div className="row justify-content-center">
          <a href={"https://www.linkedin.com/in/ryan-paez/"}>
            <img
              className="rounded-circle my-3 mt-5"
              src={require("../images/Me.jpg")}
              alt="me"
              id="me"
            />
          </a>
          <h5 className="font-weight-light text-center mb-5" id="clickme">
            Click me!
          </h5>

          <div className="about ">
            <div className="aboutmove mt-5" id="aboutmove">
              <h1 className="font-weight-light text-center mb-3">
                Contact Me through LinkedIn or my Email below
              </h1>
              <p className="text-center mx-5">
                Ready for my next journey in life to start as a Full Stack
                Developer! Working hard as a team member and always getting the
                job done right.
              </p>

              <div className="email justify-content-center">
                <div
                  className="emailmove justify-content-center mb-3"
                  id="emailMove"
                >
                  <ContactUs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
