import React from 'react';

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Hobbies</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-gamepad"></i>
          <span>Video Games</span>
        </li>
        <li className="hobby">
          <i className="fas fa-baby"></i>
          <span>Child Care</span>
        </li>
        <li className="hobby">
          <i className="fas fa-futbol"></i>
          <span>Soccer</span>
        </li>
        <li className="hobby">
          <i className="fas fa-guitar"></i>
          <span>Guitar</span>
        </li>
        <li className="hobby">
          <i className="fas fa-film"></i>
          <span>Movies</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;