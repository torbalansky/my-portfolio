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
        x: [0, 20, 0],
      }}
      transition={{
        duration: 1.5,
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
        bottom: "40px",
        right: "20px",
      }}
    ></motion.div>
  );
};

const ProjectCardContainer = styled.div`
  display: grid;
  gap: 10px;
  padding: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 3fr));

  @media (max-width: 640px) {
    grid-template-columns: repeat(1fr);
    margin:auto;
  }
`;

const ProjectCard = ({index, name, description, tags, image, source_code}) => {
  return (
    <motion.div variants={fade("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 8,  
          scale: 1.02,
          speed: 250,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[400px] w-full'
      >
        <div className='relative w-full h-[280px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-fill rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code, "_blank")}
              className='green-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
          </div>
          </div>
        </div>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className=' object-contain'
              />
            </div>
          </div>
        <div className='mt-3'>
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
    <section id="work" className="h-full mt-[100px] items-center justify-center h-screen mb-[50px]">
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
    </section>
  );
};

export default Work;
