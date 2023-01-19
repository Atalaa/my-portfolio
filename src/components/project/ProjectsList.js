import React, { useState } from 'react';
import portfolioData from '../../data/portfolioData';
import Projects from './Projects';

const ProjectsList = () => {

  let radios = [
    {id:0, value: "all"},
    {id:1, value: "javascript"},
    {id:2, value: "react"},
    {id:3, value: "firebase"},
    {id:4, value: "html5/css"},
    {id:5, value: "sass"},
  ];

  const [radio] = useState(radios); //fixed state
  const [itemSelected, setItemSelected] = useState('all'); //dynamic state

  const handleRadio = (e) => {
    setItemSelected(e.target.value);
  }


  return (
    <div className="projectContent">
      <ul className="radioDisplay">
        {
          radio.map(item => {
            return (
              <li key={item.id}>
                <input 
                  type="radio"
                  name="radio"
                  checked={item.value === itemSelected}
                  value={item.value}
                  id={item.value}
                  onChange={handleRadio}
                />
                <label htmlFor={item.value}>{item.value}</label>
              </li>
            )
          })
        }
      </ul>

      <div className="projectsList">
        {
          portfolioData
          .filter(resultItem => resultItem.languages.includes(itemSelected))
          .map(item => {

          return (

            <Projects 
              key={item.id}
              items={item}
            />
          )})
        }
      </div>      
    </div>
  );
};

export default ProjectsList;