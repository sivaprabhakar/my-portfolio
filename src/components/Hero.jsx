import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { GoDownload } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io5";
import hero from '../assets/projects/471c3d84-005c-4dcd-8e79-2dd69c8024fe.png';
import background from '../assets/projects/3d-glassy-levitating-gradient-shapes.png';

const Hero = () => {
  const resumeLink = "https://drive.google.com/file/d/1f5DNun1oYQHY26F5jY5597p3y5fyNoOC/view";

  return (
    <div id="home" className='px-8 border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap items-center'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-start'>
            <motion.h1
              className='pb-4 my-4 max-w-xl py-4 text-6xl md:text-5xl lg:text-8xl font-normal tracking-tight text-left lg:text-left dark:text-gray-100'
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className='relative inline-block'>
                <span className='bg-gradient-to-r from-purple-600 via-pink-400 to-red-700 bg-clip-text text-transparent'>
                  Siva Prabhakaran 
                </span>
              </span>
            </motion.h1>
            <motion.span
              className='mt-2 mb-2 max-w-xl bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-3xl md:text-4xl lg:text-5xl tracking-tight text-transparent text-left lg:text-left'
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              className='max-w-xl text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-300 text-left lg:text-left'
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.6 }}
            >
              A passionate full-stack developer with expertise in the MERN stack
            </motion.p>
            <div className='flex mt-4 space-x-4'>
              <motion.a
                href="https://github.com/sivaprabhakar"
                target="_blank"
                rel="noopener noreferrer"
                className='text-2xl text-gray-500 hover:text-gray-700'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.6 }}
              >
                <IoLogoGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sivaprabhakaran-pm-10a00127b/"
                target="_blank"
                rel="noopener noreferrer"
                className='text-2xl text-gray-500 hover:text-gray-700'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.6 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className='text-2xl relative lg:-top-1 text-blue-500 hover:text-purple-500 flex items-center no-underline'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.6 }}
              >
                <span className='hidden lg:inline-block'>Resume</span>
                <GoDownload className='mr-1' />
              </motion.a>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='relative flex justify-center'>
            <motion.div
              className='absolute top-0 left-0 w-full h-full bg-no-repeat bg-center opacity-70'
              style={{ backgroundImage: `url(${background})` }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8,delay: 0.8 }}
            ></motion.div>
            <motion.img
              src={hero}
              alt="Siva Prabhakaran"
              className='relative top-4 w-80 h-80 md:w-90 md:h-80 lg:w-[70%] lg:h-[70%] rounded-lg'
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8,delay: 0.8 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

