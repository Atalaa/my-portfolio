import React from 'react';
import Navigation from '../components/Navigation';
import Typed from 'react-typed';
import resume from '../media/Aata-allah_Rchidi_resume.pdf';


const Home = () => {
    return (
        <div className="home">
            <Navigation />   
            <div className="homeContent">
                <div className="content">
                    <h1>Aata Rchidi</h1>
                    {/* <h2>
                        <Typed 
                            strings={["Frontend developer", "Web developer", "Video gamer"]}
                            typeSpeed={68}
                            backSpeed={10}
                            backDelay={300}
                            startDelay={100}
                            loop
                            smartBackspace
                        />
                    </h2> */}

                    {/* <h3>
                        Fluent in French and English, I'm a passionate web developer with 2 years + of experience building and maintaining websites. I have knowledge of vanilla Javascript, React, Sass.
                    </h3> */}
                            

                    <div className="infoHomePage">
                        <div className="resume">
                            <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                        </div>
                        <h2>
                            <Typed 
                                strings={["Frontend developer", "Web developer", "Also a Video gamer !"]}
                                typeSpeed={68}
                                backSpeed={10}
                                backDelay={300}
                                startDelay={100}
                                loop
                                smartBackspace
                            />
                        </h2>
                        <h3>
                            Fluent in French and English, I'm a passionate web developer with 2 years + of experience building and maintaining websites. I speak Javascript, React, Sass.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;