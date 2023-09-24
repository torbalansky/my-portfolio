import React from "react";
import { styles } from "../styles";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fade } from "../animations";
import { Tilt } from 'react-tilt';
import { projects } from "../constants";
import { github } from "../img";

const FloatingArrow = ({ className }) => {
  return (
    <motion.div
      animate={{
        x: [0, 10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className={`w-6 h-6 ${className}`}
      style={{
        background: "transparent",
        borderTop: "10px solid transparent",
        borderBottom: "10px solid transparent",
        borderLeft: "20px solid #d1f8fd",
        position: "fixed",  
        bottom: "0",
        right: "20px",
      }}
    ></motion.div>
  );
};

const FloatingArrowBack = ({ className }) => {
  return (
    <motion.div
      animate={{
        x: [0, 10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className={`w-6 h-6 ${className}`}
      style={{
        background: "transparent",
        borderTop: "10px solid transparent",
        borderBottom: "10px solid transparent",
        borderRight: "20px solid #d1f8fd",
        position: "fixed",  
        bottom: "0",
        left: "20px",
      }}
    ></motion.div>
  );
};

// Styled component for the project card container
const ProjectCardContainer = styled.div`
  display: -ms-grid;
  display: grid;
  gap: 50px;
  padding: 10px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @supports (-moz-appearance: none) {
    gap: 20px;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    margin: auto;
    width: 100%;
    padding-right: 40px;
  }
`;

const ProjectCard = ({index, name, description, tags, image, source_code}) => {
  const openGitHubRepository = () => {
    const confirmGitHub = window.confirm(
      "You are about to visit the GitHub repository. Do you want to proceed?"
    );

    if (confirmGitHub) {
      window.open(source_code, "_blank");
    }
  };
  return (
    <motion.div variants={fade("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 8,  
          scale: 1.02,
          speed: 250,
        }}
        className='violet-gradient p-5 rounded-2xl sm:w-[400px] w-full grid-container'
      >
        <div className='relative w-full h-[280px] cursor-pointer'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-fill rounded-2xl'
            onClick={openGitHubRepository}
          />
          </div>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
               <img
                src={github}
                alt='source code'
                className=' object-contain'
                onClick={openGitHubRepository}
              />
            </div>
        <div className='mt-3 grid-container'>
          <h3 className='text-white font-bold text-[18px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] text-justify'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Work = () => {
  return (
    <section id="work" className="h-full grid items-center justify-center mb-[100px]">
        <h2 className={`${styles.pHeadText} text-center`}>My work.</h2>
      <ProjectCardContainer>
        {projects.map((projects, index) => (
          <ProjectCard key={projects.title} index={index} {...projects} />
        ))}
      </ProjectCardContainer>
      <div>
        <Link to="/contact">
          <FloatingArrow />
        </Link>
      </div>
      <div>
        <Link to="/about">
          <FloatingArrowBack />
        </Link>
      </div>
    </section>
  );
};

export default Work;
