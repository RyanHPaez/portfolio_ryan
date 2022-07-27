import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/133515411_2901941880029508_174536494781446050_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=1My55PKtyS0AX-rUGPi&tn=TxyqeLy8NatzAtC5&_nc_ht=scontent-lax3-1.xx&oh=00_AT8Tdc0LexMb4TjUvH6vYqp_-HmHXmJDtcp7iDq7gnsP6A&oe=63076FB4"
              alt="Daddy and V"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">My Skills</h1>
            <p>
            Languages & Tools: JavaScript, (React & Redux), TypeScript,  Node.js, HTML, CSS, SASS, GitHub, GitBash, Devtools, Python, AWS, Heroku, Django, Cybersecurity
			</p>
            <p>Databases: MongoDB, PostgreSQL, SQL</p>
            <p>Security: Cyber Security</p>
            <p>I have a GitHub with over 100 Repositories   </p>
            <a href={"https://github.com/RyanHPaez?tab=repositories"}>Check them out!</a>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About Me</h1>
            <p>
                I am father of two perfect children and a husband to the best wife in the world. I am currently working as a Aircraft Mechanic at Western Jet Aviation in Van Nuys, CA. I love staying busy and focused. I have amazing drive and am persistent. When I found coding I learned that it fits into what I am a natural at. Never giving up! And I find constanly being challenged is something I love to do. I see my future as being happy and thankful for always wanting to do better.   
            </p>
            <p>- Ryan Paez</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;