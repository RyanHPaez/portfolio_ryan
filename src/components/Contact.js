import React from "react";

function Contact() {
  return (
    <div className="contact" >
      <div class="container" >
        <div class="row align-items-center my-5" >
          <div class="col-sm-12">
            <img
              class="rounded-circle  row align-items-center my-5"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQGV7LQ_7Q-aTw/profile-displayphoto-shrink_200_200/0/1591653389941?e=1664409600&v=beta&t=2-YMs4gXbovh9xjD3JDmEMOisp1yCsQDQZ9gccZmFEY"
              alt="me"
              width='220px'
              height='200px'
              position= "fixed"
            />
          </div>
          <div class="col-sm-12">
            <h1 class="font-weight-light">Contact</h1>
            
     <p>Ryan Paez:</p>
     
     <a href={"https://www.linkedin.com/in/ryan-paez/"}>Click here to go to my LinkedIn</a>
  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;