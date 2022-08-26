import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="img col-sm-12 shadow-lg p-1 mb-1">
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
              <div className="text-center"></div>
            </div>
          </div>
          <div className="col-sm-12 my-4">
            <h1 className="font-weight-light text-center">About Me</h1>
            <p className="text-center">
              I am a father of two perfect children and a husband to the best
              wife in the world. Currently working as a Aircraft Mechanic at
              Western Jet Aviation in Van Nuys, CA. Love staying busy, focused
              and challenged, being very persistent with amazing drive. An
              excellent team player with a great personality, easy to talk to
              and also known to be a genuine guy. Coding found me and I learned
              that it fits into what I am a natural at. Never giving up! My
              present and future is blessed with happiness that comes from
              having a positive attitude. Proud of all accomplishments achieved
              and future accomplishments that will be achieved. Wanting to
              mature will always be a thing for me.
            </p>
            <h5 className="font-weight-light text-center"> Ryan Paez</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
