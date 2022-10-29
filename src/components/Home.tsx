import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.3,
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
      <div className="container">
        <div className="Image my-5">
          <img
            src={require("../images/dv.jpg")}
            alt="Daddy and Valerie"
            id="dv"
            className="center"
          ></img>
        </div>

        <div className="about">
          <div className="read" id="aboutmove">
            <h1 className="font-weight-light text-center align-items-center mb-3 ">
              Hi, My name is Ryan
            </h1>
            <p className="text-center mx-4 ">
              Currently working on my own projects I have done in the past to
              make myself and them better. My greatest accomplishment is having
              great understanding and compassion working within a team. I have
              managed other employees with great leadership skills. Why am I
              choosing to go into this career path of become a Software
              developer? Because I simply love coding, love sitting behind a
              desk and watching my work progress with the push of a save button.
              I am a father of two perfect children and a husband to the best
              wife in the world. Currently working as a Aircraft Mechanic. I
              Love staying busy, focused and challenged, being very persistent
              with amazing drive. An excellent team player and love working with
              people that have great knowledge and abilities. My best traits are
              having a great personality, easy to talk to and also known to be a
              genuine guy. Coding found me and I learned that it fits into what
              I am a natural at. Never giving up! My present and future is
              blessed with happiness that comes from having a positive attitude.
              Proud of all accomplishments achieved and future accomplishments
              that will be achieved. Wanting to mature will always be a thing
              for me.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
