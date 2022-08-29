import React from "react";
import { motion } from "framer-motion";

function Skill() {
  return (
    <motion.div
      className="resume bg-dark my"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
    >
      <div className="container ">
        <div className="row bg-dark my-5">
          <div className="col-sm-4 text-center"> </div>
          <div className="col-sm-4 my-3  text-center">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 my-4 text-center">
                  <h1 className="myskills font-weight-light  ">My Skills</h1>
                  <p className="myskills">Languages & Tools:</p>
                  <p>
                    JavaScript, React, Redux, Node.js, HTML, CSS, SASS, GitHub,
                    GitBash, Devtools, , TypeScript, AWS, Heroku, Django,
                    Cybersecurity
                  </p>
                  <p>Databases: MongoDB, PostgreSQL, SQL</p>
                  <div className="col-sm-12  text-center"></div>
                </div>
                <div className="col-sm-12  my-4 text-center">
                  <h5>I have a GitHub with over 100 Repositories</h5>
                  <a href={"https://github.com/RyanHPaez?tab=repositories"}>
                    <h4 text-justify>Check them out!</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
