import React from "react";
import { styles } from "../styles";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fade } from "../animations";
import { Tilt } from 'react-tilt';
import { projects } from "../constants";
import { github } from "../img";

const Section = styled.div`
  height: max-content;
  margin-top: 100px;
`;

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
      }}
    ></motion.div>
  );
};

const ProjectCardContainer = styled.div`
  display: grid;
  gap: 10px;
  margin: 40px 20px;
  grid-template-columns: repeat(auto-fill, minmax(500px, 2fr));

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
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code, "_blank")}
              className='green-text-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
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
          <h3 className='text-white font-bold text-[20px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
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
    <Section className="m-10">
      <motion.div>
        <h2 className={styles.pSubText}>Some of my projects:</h2>
      </motion.div>
      <ProjectCardContainer>
        {projects.map((projects, index) => (
          <ProjectCard key={projects.title} index={index} {...projects} />
        ))}
      </ProjectCardContainer>
      <div className="absolute bottom right-4 mr-6">
        <Link to="/contact">
          <FloatingArrow />
          <p className="text-white mt-2">Contact me</p>
        </Link>
      </div>
    </Section>
  );
};

export default Work;
