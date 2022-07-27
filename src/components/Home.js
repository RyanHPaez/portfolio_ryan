import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.18169-9/374416_364683393644397_73091407_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=tGoIL_RmOdwAX-P0hCL&_nc_ht=scontent-lax3-1.xx&oh=00_AT-3JW3qv_XbGwI5LOQFl8aWgBFvWcbVP18bMYfDf6lfpA&oe=6304F308"
              alt="me"
            />
          </div>
          <div class="col-lg-5">
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