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
                src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/133515411_2901941880029508_174536494781446050_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=1My55PKtyS0AX-rUGPi&tn=TxyqeLy8NatzAtC5&_nc_ht=scontent-lax3-1.xx&oh=00_AT8Tdc0LexMb4TjUvH6vYqp_-HmHXmJDtcp7iDq7gnsP6A&oe=63076FB4"
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
