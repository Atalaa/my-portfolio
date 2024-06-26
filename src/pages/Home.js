import React from "react";
import Navigation from "../components/Navigation";
import Typed from "react-typed";
import resume from "../media/Aata_Rchidi_RESUME.pdf";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Aata Rchidi</h1>
          <div className="infoHomePage">
            <div className="resume">
              <a href={resume} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </div>
            <h2>
              <Typed
                strings={[
                  "Front-end developer",
                  "Web developer",
                  "Interest in Back-end!",
                ]}
                typeSpeed={68}
                backSpeed={10}
                backDelay={300}
                startDelay={100}
                loop
                smartBackspace
              />
            </h2>
            <h3>
              Fluent in French and English, I'm a passionate web developer with
              3 years of experience building and maintaining websites. I know
              Javascript, React, Angular.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
