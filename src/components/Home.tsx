import React from "react";
import {motion} from "framer-motion"

function Home() {
  return (
    <motion.div className="home "
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      default: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01]
      },
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001
      }
    }}
    >      
      <div className="container">      
        <div className="row align-items-center  my-5">
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
              Developer! I am a hard worker and and always do my best to get the
              job done right.
            </p>
          </div>
        </div>
      </div>
   
    
     
    </motion.div>
  );
}

export default Home;