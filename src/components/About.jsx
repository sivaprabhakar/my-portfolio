import React from 'react';
import aboutImg from "../assets/projects/program_complete-ai-brush-removebg-pp8zpn5a.png";

const About = () => {
  return (
    <div id="about" className=' border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl md:text-5xl lg:text-6xl'>
        About <span className='text-neutral-500'>Me</span>
      </h1>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img
              className='rounded-2xl w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-96 xl:h-96'
              src={aboutImg}
              alt="about"
            />
          </div>
        </div>
        <div className='w-full lg:w-1/2 flex items-center justify-center'>
          <div className='flex justify-center lg:justify-start p-4 md:p-8 lg:p-12'>
            <p className='my-2 max-w-xl py-6 text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed'>
             
              Passionate MERN stack developer with a keen interest in crafting elegant web
solutions. Eager to contribute to dynamic teams and continuously enhance skills
through hands-on experience. Strong problem-solving abilities and a collaborative
mindset. Seeking opportunities to apply technical expertise and drive innovation
in web development projects."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


