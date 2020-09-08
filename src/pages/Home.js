import React from 'react';
import Navigation from '../components/Navigation';
import Typed from 'react-typed';


const Home = () => {
    return (
        <div className="home">
            <Navigation />   
            <div className="homeContent">
                <div className="content">
                    <h1>Aata Rchidi</h1>
                    
                    <h2>
                        <Typed 
                            strings={["Front-End Developer", "Passionate Developer", "Enjoy my portfolio!"]}
                            typeSpeed={68}
                            backSpeed={10}
                            backDelay={300}
                            startDelay={100}
                            loop
                            smartBackspace
                        />
                    </h2>

                    <div className="resume">
                        <a href="./media/Aata-allah_resume.pdf" target="_blank">Download resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;