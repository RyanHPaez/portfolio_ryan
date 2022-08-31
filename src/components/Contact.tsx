import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="Contact"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="img col-sm-12  p-1 ">
            <a href={"https://www.linkedin.com/in/ryan-paez/"}>
              <img
                className="rounded-circle my-3"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQGV7LQ_7Q-aTw/profile-displayphoto-shrink_200_200/0/1591653389941?e=1666828800&v=beta&t=PGohE5aTIFEhEp7tj86A-6B_HcIpgSagdnSHgdojD4k"
                alt="Linkedin photo"
              />
            </a>
            <h5 className="font-weight-light text-center">Click me!</h5>
            <div className="col-sm-12">
              <h1 className="font-weight-light text-center">
                Contact Me through LinkedIn
              </h1>
            </div>
          </div>
          <div className="about my-3">
            <div className="about col-lg-12  bg-dark shadow-lg p-1 ">
              <h1 className="font-weight-light text-center mb-3">About Me</h1>
              <p className="text-center mb-3 mx-5">
                I am currently an Aircraft Technician at Western Jet Aviation. I
                love being a Tech but I am getting older and I dont know how
                much longer before my body can not handle working physically
                anymore. My greatest accomplishment is having great
                understanding and compassion working within a team. I have
                managed other employees with great leadership skills. Why am I
                choosing to go into this career path of become a Software
                developer? Because I simply love coding, love sitting behind a
                desk and watching my work progress with the push of a save
                button. I am a father of two perfect children and a husband to
                the best wife in the world. Currently working as a Aircraft
                Mechanic. I Love staying busy, focused and challenged, being
                very persistent with amazing drive. An excellent team player and
                love working with people that have great knowledge and
                abilities. My best traits are having a great personality, easy
                to talk to and also known to be a genuine guy. Coding found me
                and I learned that it fits into what I am a natural at. Never
                giving up! My present and future is blessed with happiness that
                comes from having a positive attitude. Proud of all
                accomplishments achieved and future accomplishments that will be
                achieved. Wanting to mature will always be a thing for me.
              </p>
              <h5 className="font-weight-light text-center mb-4 ">
                {" "}
                Ryan Paez
              </h5>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
