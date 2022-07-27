import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-md-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/44972081_1824995524279836_3745263644489809920_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=naGqf5cD4uEAX-4sNEH&_nc_ht=scontent-lax3-1.xx&oh=00_AT-DjqG-bos7UTDC6VkhqEUrOn7-ERumGLGgyGHopn6s2Q&oe=63058C3B"
              alt="me"
            />
          </div>
          <div class="col-sm-4">
            <h1 class="font-weight-light">Hi, My name is Ryan</h1>
            <p>
             I am ready for my next journey in life to start as a Full Stack Developer!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;