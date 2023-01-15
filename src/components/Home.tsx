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
          
          <a href={"https://www.facebook.com/solo.snail"}>
            <img
              src={require("../images/dv.jpg")}
              alt="Daddy and Valerie"
              id="dv"
              className="center"
              
            ></img>
            
          </a>
          
        
          <h1 className="font-weight-light text-center my-3 mb-3">
                    PROFESSIONAL PROJECTS
                  </h1>
                  <h3 className="text-center">
                    Rest Rant 
                  </h3>
                  <div className="container my-5">
                    <div className="row align-items-center text-center">
                      <div className="restRant">
                        <a href={"https://github.com/RyanHPaez/project-REST-rant" } >
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
                  <ul>
                    <li className="text-left">
                    Developed an efficient and engaging user interface for in-browser to show off Full-Stack work and utilizing Mongo Data Base storage.
                    </li>
                    <li className="text-left">
                    Created code by translating thoughtful design with code and debugging to work flawlessly and able to deploy on web.
                    </li>
                    <li className="text-left">
                    Created Fullstack layout by using HTML, CSS, React, DotENV, Express-React-Views, React, Express, Method-Override and Mongoose to respond to Heroku. 
                    </li>
                  </ul>

                  <h3 className="text-center">
                    SweepStake Winner! 
                  </h3>
                  <div className="container my-5">
                    <div className="row align-items-center text-center">
                      <div className="sweepstake text-center ">
                        <a href={"https://github.com/RyanHPaez/SweepStakes"}>
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
                  <ul>
                    <li className="text-left">
                      Developed efficient and engaging user interface for in-browser to show off frontend work and utilizing local storage.
                    </li>
                    <li className="text-left">
                      Created front-end layout with using HTML, CSS and PHP to respond to Heroku. Get a different result every time you enter with Math Random.
                    </li>
                    <li className="text-left">
                      Enhanced pre-existing code by translating thoughtful
                      design with code and debugging to work flawlessly and able
                      to deploy on web.
                    </li>
                  </ul>
                  <h3 className="text-center">
                    Music API 
                  </h3>
                  <div className="container my-5">
                    <div className="row align-items-center text-center">
                      <div className="music ">
                        <a href={"https://github.com/RyanHPaez/AT-A-Sassy-Landing-Page"}>
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
                  <ul>
                    <li className="text-left">
                      Developed efficient and engaging user interface for
                      in-browser music search.
                    </li>
                    <li className="text-left">
                      Created front-end layout with HTML, TypeScript, SCSS(SASS)
                      and CSS; incorporated DOM container and React to achieve
                      more responsive product design.
                    </li>
                    <li className="text-left">
                      Producted prototype and enhanced user experience by
                      translating thoughtful design with code.
                    </li>
                  </ul>
                  <h3 className="text-center">
                    Whack-A-Mole 
                  </h3>
                  <div className="container my-5">
                    <div className="row align-items-center text-center">
                      <div className="whack ">
                        <a href={"https://github.com/RyanHPaez/react_a_mole"}>
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
                  
                    <h3 className="text-center">
                      Portfolio 
                    </h3>
                    <ul>
                      <li className="text-left">
                        Development of a portfolio piece web application to show
                        off what I have done and can do with ease.
                      </li>
                      <li className="text-left">
                        Coded cross-browser compatible front-end with ReactJS
                        and CSS to create dynamic, pixel-perfect user interface.
                      </li>
                      <li className="text-left">
                        Focused on completing daily tasks and progress toward
                        goal; achieved product deliverable ahead of schedule.
                      </li>
                      <li className="text-left">
                        Leveraged user testing data to consolidate multi-page
                        product into a streamlined design and debug code errors;
                        improved user experience (UX).
                      </li>
                    
                    <li className="text-left">
                      Developed efficient and engaging user interface for
                      in-browser game.
                    </li>
                    <li className="text-left">
                      Created front-end layout with HTML5, JSX, React and CSS;
                      incorporated DOM container and React to achieve more
                      responsive product design.
                    </li>
                    <li className="text-left">
                      Collaborated on product prototype wireframes and enhanced
                      user experience by translating design requirements into
                      code.
                    </li>
                  </ul>
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
