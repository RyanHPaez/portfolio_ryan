import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-md-6">
          <img
                className="img-fluid "
                src="https://olyortho.com/wp-content/uploads/2020/09/AdobeStock_124565984-1-scaled.jpeg"
                alt="hills"
              />
          </div>
          <div className="col-md-6  my-5 text-center text-justify">
            <h1 className="Hi font-weight-light ">Hi, My name is Ryan</h1>
            <p>
              Ready for my next journey in life to start as a Full Stack
              Developer! I am a hard worker and and always do my best toget the
              job done right.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;