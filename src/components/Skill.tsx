import React from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

function Skill() {
  return (
    <motion.div
      className="resume "
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        },
        scale: {
          type: "spring",
          damping:20,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >      
            <div className="container my-5" id="container">
              <div className="row my-5">                
                    <a href={"https://github.com/RyanHPaez?tab=repositories"}>
                      <i
                        className="fab fa-github mt-5"
                        style={{ fontSize: "88px" }}
                      />
                      <h4 className="my-3">My GitHub!</h4>
                    </a>
                  </div>
                  <h1 className="myskills font-weight-light mb-3 ">My Skills</h1>
                  <i className="emblem fa-brands fa-react"></i>
          <i className="emblem fa-brands fa-js"></i>
          <i className="emblem fa-brands fa-node"></i>
          <i className="emblem fa-brands fa-css3"></i>
          <i className="emblem fa-brands fa-html5"></i>
          <i className="emblem fa-brands fa-bootstrap"></i>
          <i className="emblem fa-brands fa-python"></i>
          <i className="emblem fa-brands fa-sass"></i>
                  <h5 className="myskills my-3">Languages & Tools:</h5>
                  <p>
                    JavaScript, React, Redux, Node.js, HTML, CSS, SASS, GitHub,
                    GitBash, Devtools, TypeScript, AWS, Heroku, Django,
                    Cybersecurity
                  </p>
                  <h5>Databases: </h5>
                  <p>MongoDB, PostgreSQL, SQL</p>
                
              
                <div className=" col-sm-12   ">
                  <h1 className="font-weight-light text-center mb-3 ">
                    SUMMARY
                  </h1>
                  <p>
                  Customer-focused front-end developer experienced at enhancing user interfaces, writing efficient code, and creating dynamic products. Understanding of front-end technologies, including HTML5, CSS3, JavaScript, jQuery. Experience with UI/UX design. Experience with RESTful APIs. Write mobile and web apps in Angular.JS and React.JS. Good at making tricky layouts and full width backgrounds look good across the board. Experience taking designs from figma and polishing all the way to complete website. Ability to break down and solve complex problems. Experience with PostgreSQL and Mongodb.
                  </p>
                </div>

                <div className=" col-sm-12   ">
                  <h1 className="font-weight-light text-center mb-3 my-3">
                    EDUCATION
                  </h1>

                  <h5>Cal State Long Beach</h5>
                  <p>
                    Software Development Certificate | August 2021 - May 2022
                  </p>

                  <h5>Spartan College Inglewood</h5>
                  <p>
                    AirFrame & PowerPlant Certificate | June 2016 - June 2018
                  </p>

                  <h5>El Camino Community College</h5>
                  <p>Associates Degree General Studies | June 2010</p>
                </div>

                <div className="text-center mb-3 mx-5">
                  <h1 className="font-weight-light text-center my-3 mb-3">
                    PROFESSIONAL PROJECTS
                  </h1>
                  <h3 className="text-center">
                    Rest Rant 
                  </h3>
                  <div className="container my-5">
                    <div className="row align-items-center text-center">
                      <div className="restRant">
                        <a href={"https://restaurantsrants.herokuapp.com/" } >
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
                  <h4 className="text-center">PROFESSIONAL EXPERIENCE</h4>

                  <h5 className="text-left">
                    Western Jet Aviation | August 2020 - Present
                  </h5>
                  <h6 className="text-left">Aircraft Tech 2</h6>
                  <ul>
                    <li className="text-left">
                      Part 145 (14 CFR) Repair Station. Provided training for
                      Aeronautics and technology and implemented operational
                      best practices to support exemplary services to a broad
                      range of Aircraft Makes and Models.
                    </li>
                    <li className="text-left">
                      Escalated system issues to tech support and communicated
                      status to delivery team to reduce downtime.
                    </li>
                    <li className="text-left">
                      Initiated technology demonstrations and developed
                      responses to frequent challenges to enhance team training.
                      Contributed to the best practice handbook for corporate
                      office.
                    </li>
                    <li className="text-left">
                      Heavy Maintenance on aircraft with taking the airplane
                      apart to do work orders, alterations, Inspections, and
                      maintenance. Then putting them back together in accordance
                      with maintenance manuals.
                    </li>
                  </ul>

                  <h5 className="text-left">
                    Apollo Professional Contractor (GulfStream) | October 2019 -
                    August 2020
                  </h5>
                  <h6 className="text-left">Aircraft Tech 2</h6>
                  <ul>
                    <li className="text-left">
                      Part 145 (14 CFR) Repair Station. Provided training for
                      Aeronautics and technology and implemented operational
                      best practices to support exemplary services to a broad
                      range of Aircraft Makes and Models.
                    </li>
                    <li className="text-left">
                      Escalated system issues to tech support and communicated
                      status to delivery team to reduce downtime.
                    </li>
                    <li className="text-left">
                      Initiated technology demonstrations and developed
                      responses to frequent challenges to enhance team training.
                      Contributed to the best practice handbook for corporate
                      office.
                    </li>
                    <li className="text-left">
                      Heavy Maintenance on aircraft with taking the airplane
                      apart to do work orders, alterations, Inspections, and
                      maintenance. Then putting them back together in accordance
                      with maintenance manuals.
                    </li>
                  </ul>
                  <h5 className="text-left">
                    Aerotek Contractor (Clay Lacy Aviation) | June 2019 - Oct
                    2019
                  </h5>
                  <h6 className="text-left">Aircraft Tech 2</h6>

                  <ul>
                    <li className="text-left">
                      Aircraft Maintenance Technician on Gulfstream, Challenger,
                      Leer, Falcon, Embraer, Hawkers.
                    </li>
                    <li className="text-left">
                      MEL’s, IPC’s, read AMM’s, FIM’s, damage reports, log book,
                      Corridor, CMP.
                    </li>
                    <li className="text-left">
                      Preventive maintenance, Major overhauls on Phenom and
                      Gulfstream aircraft.
                    </li>
                    <li className="text-left">
                      Trans checks, Service Checks, AOG, Replenish oils.
                    </li>
                    <li className="text-left"> Troubleshooting.</li>
                    <li className="text-left">
                      Engine Preservation, Engine maintenance, Cabin
                      maintenance.
                    </li>
                    <li className="text-left"> Corrosion Awareness.</li>
                    <li className="text-left"> Understand Fire protection.</li>
                    <li className="text-left">
                      Disassemble, repair, replace and reassemble aircraft and
                      tools.
                    </li>
                    <li className="text-left">
                      Meet deadlines with quality work.
                    </li>
                    <li className="text-left"> Measuring.</li>
                  </ul>
                  <h5 className="text-left">
                    DGS/LAUNCH Contractor (Delta Airlines LAX) | August 2018 -
                    June 2019
                  </h5>
                  <h6 className="text-left">Aircraft Maintenance Tech</h6>
                  <ul>
                    <li className="text-left">
                      Aircraft Maintenance Technician for Boeing 737, 757, 767
                      and Airbus 319, 320, 321, 330, 350.
                    </li>
                    <li className="text-left">
                      Perform all work activities in accordance with established
                      laws, regulations, standards, safety protocols, and
                      procedures to ensure safety of self and others.
                    </li>
                    <li className="text-left">
                      Inspect aircraft or aircraft components, including landing
                      gear, hydraulic systems, tires, and engines for damage,
                      defects, corrosion, or other wear to ensure airworthiness.
                    </li>
                    <li className="text-left">
                      Recommend replacement, repair, or modification of aircraft
                      equipment based on inspection.
                    </li>
                    <li className="text-left">
                      Report issues, malfunctions, unusual wear, or damage to
                      appropriate personnel, as required.
                    </li>
                    <li className="text-left">
                      Installs, removes, or modifies aircraft structures,
                      systems, or components, following drawings, schematics,
                      charts, engineering orders, and technical publications.
                    </li>
                    <li className="text-left">
                      Repairs worn, defective, or damaged parts or components
                      (e.g., damaged gaskets, lines and couplings, cables, and
                      pulleys), using hand tools, gauges, and testing equipment.
                    </li>
                    <li className="text-left">
                      Inspects completed work to certify that maintenance
                      adheres to standards and procedures, and that aircraft are
                      ready for operation.
                    </li>
                    <li className="text-left">
                      Interprets discrepancies or logs (written or verbal) to
                      understand history and nature of issue, to troubleshoot
                      issue, and to identify required next steps (e.g., fix,
                      defer, replace).
                    </li>
                    <li className="text-left">
                      Research, read, and interpret technical manuals and
                      guidelines to perform inspections, installations, repairs,
                      or other work activities.
                    </li>
                    <li className="text-left">
                      Review maintenance records to determine if service and
                      maintenance checks, repairs, and overhauls were performed
                      at prescribed intervals.
                    </li>
                    <li className="text-left">
                      Maintain repair logs, documenting all preventative and
                      corrective aircraft maintenance activities.
                    </li>
                    <li className="text-left">
                      Serve as a technical expert or mentor by providing advice
                      and corrective recommendations to others.
                    </li>
                  </ul>
                  <h5 className="text-left my-2">
                    BerkShire Hathaway | January 2014 - June 2020
                  </h5>
                  <h6 className="text-left">Real Estate Agent</h6>
                </div>
              
              </div>
            
        
      
    </motion.div>
  );
}

export default Skill;
