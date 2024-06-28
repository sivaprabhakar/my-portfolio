import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiMongodb, SiExpress, SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiMysql } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';

const skillsData = [
  { name: 'React', icon: <SiReact className="text-blue-500" /> },
  { name: 'Node.js', icon: <GrNode className="text-green-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-500" /> },
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
];

const iconVariants = {
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Skills = () => {
  return (
    <div
      id="skills"
      className="mt-4 mb-16 text-gray-200 dark:text-gray-100"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7  }}
        className="text-4xl md:text-4xl font-semibold mb-12 text-center"
      >
        Skills
      </motion.h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7}}
          >
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileInView="animate"
              className="text-4xl mb-2"
            >
              {skill.icon}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, }}
              className="text-lg font-thin"
            >
              {skill.name}
            </motion.h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
