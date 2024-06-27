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

const Skills = () => {
  return (
    <motion.div
    id="skills"
      className="mt-4 mb-16 text-gray-200 dark:text-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-semibold mb-12 text-center">Skills</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center ">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center "
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <h2 className="text-lg font-thin">{skill.name}</h2>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
