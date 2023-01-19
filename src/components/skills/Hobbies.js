import React from 'react';

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Hobbies</h3>
      <ul>
        
        <li className="hobby">
          <i className="fas fa-code"></i>
          <span>Keep Learning Programming</span>
        </li>
        <li className="hobby">
          <i className="fas fa-baby"></i>
          <span>Child Care</span>
        </li>
        <li className="hobby">
          <i className="fas fa-plane"></i>
          <span>Traveling</span>
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