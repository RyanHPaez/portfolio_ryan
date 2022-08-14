import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/44972081_1824995524279836_3745263644489809920_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=naGqf5cD4uEAX-4sNEH&_nc_ht=scontent-lax3-1.xx&oh=00_AT-DjqG-bos7UTDC6VkhqEUrOn7-ERumGLGgyGHopn6s2Q&oe=63058C3B"
              alt="me"
            />
          </div>
          <div className="col-sm-5  my-5 text-center text-justify">
            <h1 className="Hi font-weight-light ">Hi, My name is Ryan</h1>
            <p>
              Ready for my next journey in life to start as a Full Stack
              Developer! I am a hard worker and and always do my best toget the job done right.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
