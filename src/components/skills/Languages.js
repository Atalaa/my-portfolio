import React, { useState } from 'react';
import ProgressBar from './ProgressBar';


const Languages = () => {

  let languages = [
    {id:1, value: "JavaScript", exp:2.9},
    {id:1, value: "TypeScript", exp:.8},
    {id:4, value: "Java", exp:1},
    {id:2, value: "HTML5/CSS", exp:2.5}
  ];
  let frameworks = [
    {id:1, value: "React", exp:2},
    {id:2, value: "Angular", exp:1},
    {id:2, value: "Bootstrap", exp:2},
    {id:5, value: "Git", exp:2.8}
  ];



  const [language] = useState(languages);
  const [framework] = useState(frameworks);
  
  return (
    <div className="languagesNframeworks">  
      <ProgressBar 
        languages={language}
        className="languagesDisplay"
        title="languages"
      />
      <ProgressBar 
        languages={framework}
        className="frameworksDisplay"
        title="frameworks & libraries"
      />
    </div>
  );
};

export default Languages;