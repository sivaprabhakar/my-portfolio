import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from "../assets/constants";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHoveredIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleMouseEnter = (index) => {
    if (timeoutId) clearTimeout(timeoutId);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setHoveredIndex(null);
    }, 300);
    setTimeoutId(id);
  };

  return (
    <div id="projects" className=' border-neutral-900 pb-16'>
      <h1 className='my-20 text-center text-4xl font-semibold text-gray-100'>Projects</h1>
      <div className='flex flex-col items-center space-y-12 px-4'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='w-full max-w-6xl flex flex-col lg:flex-row items-center'>
            <div className='w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-6'>
              <img src={project.image} alt={project.title} className='w-full h-64 object-cover rounded-lg shadow-lg'/>
            </div>
            <div className='w-full lg:w-2/3'>
              <h2 className='text-3xl font-semibold mb-2 text-gray-100'>{project.title}</h2>
              <p className='text-neutral-400 mb-4'>{project.description}</p>
              <div className='flex flex-wrap mb-4'>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='mr-2 mb-2 rounded text-purple-400 bg-purple-900 bg-opacity-20 px-2 py-1 text-sm font-medium'>{tech}</span>
                ))}
              </div>
              <div className='flex space-x-4 relative'>
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='text-sm font-medium text-blue-400 hover:text-blue-500 no-underline'
                  >
                    Live Demo
                  </a>
                )}
                <div 
                  className='relative'
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    className='text-sm font-medium text-blue-400 hover:text-blue-500 no-underline focus:outline-none'
                  >
                    Source Code
                  </button>
                  {hoveredIndex === index && (
                    <div 
                      className='absolute bottom-8 left-0 flex flex-col bg-gray-800 text-sm rounded shadow-lg z-10'
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      ref={dropdownRef}
                    >
                      {project.frontendSourceCode && (
                        <a 
                          href={project.frontendSourceCode} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='px-4 py-2 text-gray-200 hover:bg-gray-700 no-underline'
                        >
                          Frontend
                        </a>
                      )}
                      {project.backendSourceCode && (
                        <a 
                          href={project.backendSourceCode} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='px-4 py-2 text-gray-200 hover:bg-gray-700 no-underline'
                        >
                          Backend
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;











