import React from "react";

function Skill() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 my-4 text-center">
          <h1 className="font-weight-light  ">My Skills</h1>
          <p>Languages & Tools:</p>
          <p>
            JavaScript (React & Redux), TypeScript, Node.js, HTML & CSS, SASS,
            GitHub, GitBash, Devtools, Python, AWS, Heroku, Django,
            Cybersecurity, 
          </p>
          <p>
          Databases: MongoDB, PostgreSQL, SQL
          </p>
          <div className="col-sm-12  my-4 text-center">
          
          <iframe
            src="https://hikingforstars.herokuapp.com/">
            </iframe>
            
            <iframe
            src="https://gamestorejar.herokuapp.com/">
            </iframe>
            
            </div>
        </div>
        <div className="col-sm-12  my-4 text-center">
          <h5>I have a GitHub with over 100 Repositories</h5>
          <a href={"https://github.com/RyanHPaez?tab=repositories"}>
                        <h4 text-justify>Check them out!</h4>
                                </a>
                             
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 text-center"> </div>
            <div className="col-sm-4 my-3  text-center">
              <img
                className="img-fluid"
                src="daddyValerie.jpg"
                alt="Daddy and V"
              />
              <div className="col-sm-4 my-3  text-center"></div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Skill;
