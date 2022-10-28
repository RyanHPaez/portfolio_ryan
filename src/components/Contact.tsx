import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <motion.div
      className="Contact"
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
      <div className="contact my-5">
        <div className="row align-items-center">
          <div className="img col-sm-12  p-1 ">
            <a href={"https://www.linkedin.com/in/ryan-paez/"}>
              <img
                className="rounded-circle my-3"
                src={require("../images/Me.jpg")}
                alt="me"
              />
            </a>
            <h5 className="font-weight-light text-center mb-5">Click me!</h5>
            <div className="col-sm-12"></div>
          </div>
          <div className="about ">
            <h1 className="font-weight-light text-center mb-3">
              Contact Me through LinkedIn
            </h1>
            <p className="text-center mx-5">
              Ready for my next journey in life to start as a Full Stack
              Developer! Working hard as a team member and always getting the
              job done right.
            </p>

            <h5 className="text-center">Resturant Rant</h5>
            <div className="container my-5">
              <div className="row align-items-center text-align center">
                <div className="restRant">
                  <a href={"https://restaurantsrants.herokuapp.com/"}>
                    <img
                      src={require("../images/rant.png")}
                      id="wm"
                      alt="rant"
                      className="center"
                    ></img>
                  </a>
                </div>
              </div>
            </div>

            <h5 className="text-center">SweepStake Winner!</h5>
            <div className="container my-5">
              <div className="row align-items-center text-align center">
                <div className="sweepstake ">
                  <a href={"https://sweepstakewinner.herokuapp.com/"}>
                    <img
                      src={require("../images/sweepstake.png")}
                      id="wm"
                      alt="sweepstakes"
                      className="center"
                    ></img>
                  </a>
                </div>
              </div>
            </div>

            <h5 className="text-center">Music API</h5>
            <div className="container my-5">
              <div className="row align-items-center text-align center">
                <div className="music ">
                  <a href={"https://findmusicforyou.herokuapp.com/"}>
                    <img
                      src={require("../images/musicsearch.png")}
                      id="wm"
                      alt="musicApi"
                      className="center"
                    ></img>
                  </a>
                </div>
              </div>
            </div>

            <h5 className="text-center">Whack-A-Mole</h5>
            <div className="container my-5">
              <div className="row align-items-center text-align center">
                <div className="whack ">
                  <a href={"https://ryanswhackamole.herokuapp.com/"}>
                    <img
                      src={require("../images/whackamole.png")}
                      id="wm"
                      alt="whackamole"
                      className="center"
                    ></img>
                  </a>
                </div>
              </div>
            </div>

            <NavLink className="nav-link" to="/contact">
              <i
                className="fab fa-linkedin-in"
                style={{ fontSize: "40px" }}
              ></i>
              <i className="nav-item">
                <NavLink className="nav-link" to="/skills">
                  <i className="fab fa-github" style={{ fontSize: "40px" }}></i>
                </NavLink>
              </i>
            </NavLink>
            <p>Email: ryanhpaez@gmail.com       Phone: 424-200-8351</p>
           
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
