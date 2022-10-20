import React from 'react';
import { NavLink } from 'react-router-dom';
import me from '../media/Aata.webp';

const Navigation = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="sidebar">
            <div className="profile">
                <div className="profileContent">
                    <img src={me} alt="profilePic"/>
                    <h3>Aata Rchidi</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "activeNav" : "")}>
                            <i className="fas fa-home"></i>
                            <span>Home</span>   
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" className={({ isActive }) => (isActive ? "activeNav" : "")}>
                            <i className="fas fa-mountain"></i>
                            <span>Skills</span>   
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => (isActive ? "activeNav" : "")}>
                            <i className="fas fa-images"></i>
                            <span>Projects</span>   
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "activeNav" : "")}>
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>   
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/aata-allah-rchidi/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Atalaa" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/AataRchidi" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/@Atalaa" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-medium"></i>
                        </a>
                    </li>
                </ul>

                <div className="signature">
                    <p>Aata-allah Rchidi - {currentYear}</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;