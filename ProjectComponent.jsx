import React, { useState } from 'react'
import Hospitals from './Projects/Hospitals';
import Industries from './Projects/Industries';
import Commercial from './Projects/Commercial';
import Floating from './Projects/Floating';
import Interior from './Projects/Interior';
import { useEffect } from 'react';

const ProjectComponent = () => {
    const [selectedProject, setSelectedProject] = useState('');
  
    const handleProjectClick = (projectName) => {
      setSelectedProject(projectName);
    };
  
    const renderProjects = () => {
        switch (selectedProject) {
          case 'INDUSTRIES':
            return <Industries/>;
            case 'HOSPITALS':
            return <Hospitals />;
          case 'COMMERCIALS':
            return <Commercial />;
          case 'INTERIORS':
            return <Interior/>;
        
          default:
            return (
              <>
              <Industries />
                <Hospitals />
                <Commercial />
                <Interior />
              </>
            );
        }
      };
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
      <div className="">
        <div className="w-full  ">
          <div className="absolute  top-1 place-content-center mt-20 max-md:mt-9 ">
            <Floating onSelectProject={handleProjectClick} />
          </div>
          {renderProjects()}
        </div>
      </div>
    );
  };
  
  export default ProjectComponent;