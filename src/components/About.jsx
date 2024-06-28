import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from "../assets/projects/program_complete-ai-brush-removebg-pp8zpn5a.png";

const About = () => {
  return (
    <div id="about" className='border-neutral-900 pb-4'>
      <motion.h1
        className='my-20 text-center text-3xl md:text-4xl lg:text-4xl'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        About <span className='text-neutral-500'>Me</span>
      </motion.h1>
      <div className='flex flex-wrap'>
        <motion.div
          className='w-full lg:w-1/2 lg:p-8'
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.4 }}
        >
          <div className='flex items-center justify-center'>
            <motion.img
              className='rounded-2xl w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-96 xl:h-96'
              src={aboutImg}
              alt="about"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>
        <motion.div
          className='w-full lg:w-1/2 flex items-center justify-center'
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.4 }}
        >
          <div
            className='flex justify-center lg:justify-start p-4 md:p-8 lg:p-12'
          >
            <motion.p
              className='my-2 max-w-xl py-6 text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed'
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Passionate MERN stack developer with a keen interest in crafting elegant web
              solutions. Eager to contribute to dynamic teams and continuously enhance skills
              through hands-on experience. Strong problem-solving abilities and a collaborative
              mindset. Seeking opportunities to apply technical expertise and drive innovation
              in web development projects.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
