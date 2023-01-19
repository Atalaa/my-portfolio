import React from 'react';

const Experience = () => {
  return (
    <div className="experience">
      <h3>Experience</h3>

      <div className="exp-1">
        <h4>Consultant Frontend Developer - Desjardins</h4>
        <h5>Mar 2022 - Dec 2022</h5>
        <div className="experienceContent">
          <ul>
            <li>Developed applications, programs/services, tools and perform the necessary tests and corrections for Insurance Habitation project.</li>
            <li>Collaborate with the various stakeholders (designer, functional analyst) in the realization of technological solutions.</li>
          </ul>
        </div>
      </div>

      <div className="exp-2">
        <h4>Consultant Frontend Developer - IBM</h4>
        <h5>Apr 2021 - Mar 2022</h5>
        <div className="experienceContent">
          <ul>
            <li>Developed and created Angular components for new client’s website pages.</li>
            <li>Created Reactive Forms in Angular for the registration page and refactoring codebase and redesign the layout with SASS.</li>
          </ul>
        </div>
      </div>

      <div className="exp-3">
        <h4>Frontend Developer - Dream Payments</h4>
        <h5>Apr 2020 - Mar 2021</h5>
        <div className="experienceContent">
          <ul>
            <li>Developed and tested web based applications for TD and Chase Bank.</li>
            <li>Built AODA and WCAG web pages using Javascript, JavaServer Faces and CSS.</li>
          </ul>
        </div>
      </div>        
    </div>
  );
};

export default Experience;