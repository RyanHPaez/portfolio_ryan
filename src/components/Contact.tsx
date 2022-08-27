import React from "react";

function Contact() {
  return (
    <div className="contact my-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="img col-sm-12 shadow-lg p-1 ">
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

          <div className="about col-lg-12  bg-dark shadow-lg p-1 ">
            <h1 className="font-weight-light text-center mb-3">About Me</h1>
            <p className="text-center mb-3 mx-5">
              I am currenty a Aircraft Technician at Western Jet Aviation. I
              love being a Tech but I am getting older and I dont know how much
              longer before my body can not handle working physically anymore. Why am I
              choosing to go into this career path of become a Software
              developer? Because I simply love coding, love sitting behind a
              desk and watching my work progress with the push of a save button.
              I am a father of two perfect children and a husband to the best
              wife in the world. Currently working as a Aircraft Mechanic.
              I Love staying busy, focused
              and challenged, being very persistent with amazing drive. An
              excellent team player and love working with people that have great knowledge and abilities. My best traits are having a great personality, easy to talk to
              and also known to be a genuine guy. Coding found me and I learned
              that it fits into what I am a natural at. Never giving up! My
              present and future is blessed with happiness that comes from
              having a positive attitude. Proud of all accomplishments achieved
              and future accomplishments that will be achieved. Wanting to
              mature will always be a thing for me.
            </p>
            <h5 className="font-weight-light text-center mb-4 "> Ryan Paez</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
