import React from 'react'

const Floating = ({ onSelectProject }) => {
    const projectNames = ['INDUSTRIES','HOSPITALS', 'COMMERCIALS', 'INTERIORS'];
  
    return (
      <div className=" bg-opacity-90 bg-green-700 text-black p-3 rounded shadow-lg  w-36 max-md:w-24  max-md:p-1  ">
        {projectNames.map((project) => (
          <button
            key={project}
            className="block max:md-pt-0 w-full px-3 bg-white text-left  text-xs  font-semibold max-md:px-0 hover:text-white hover:bg-orange-800  outline outline-1 outline-black"
            onClick={() => onSelectProject(project)}
          >
            {project}
          </button>
        ))}
      </div>
    );
  };
export default Floating