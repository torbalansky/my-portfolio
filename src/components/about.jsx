import React from "react";
import { styles } from "../styles";
import styled from "styled-components";
import { motion } from "framer-motion"; // Framer Motion library for animations
import { Link } from "react-router-dom";
import { fade } from "../animations";
import { Tilt } from 'react-tilt'; // React Tilt library for interactive tilting effect
import { tech } from "../constants";

// A component for a floating arrow animation
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

// Styled component for a container of service cards
const ServiceCardContainer = styled.div`
  width: 50%;
  display: grid;
  gap: 20px;
  margin-bottom: 20px;
  padding: 10px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 660px) {
    grid-template-columns: repeat(2, 1fr); 
    gap: 5px;
    align-items: center;
    justify-content: center;
  }
`;

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full silver-gradient rounded-[20px] w-[200px] grid items-center justify-center'>
    <motion.div
      variants={fade("right", "spring", index * 0.5, 0.7)}
      className='p-[1px] rounded-[10px]'
      style={{ width: "200px", height: "100px"}}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='p-auto min-h-[100px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section id="about" className="h-[100%] custom-top-margin flex flex-col items-center justify-center h-screen">
      <motion.div>
        <h2 className={styles.pHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        className='m-1 text-secondary text-[15px] max-w-5xl leading-[30px]'
      >
        I'm a biochemist turned web developer passionate about creating accessible and inclusive digital content.
        With a PhD background in biochemistry, I bring a unique problem-solving perspective to data analysis.
        When not coding, I enjoy music, nature, and sports.
      </motion.p>

      <p className='m-4 text-secondary text-lg font-semibold max-w-5xl leading-[30px]'>
        <span className="text-white-800">
          In the past year, I have been trying to master the following tech stacks:
        </span>
      </p>

      <ServiceCardContainer>
        {tech.map((tech, index) => (
          <ServiceCard key={tech.title} index={index} {...tech} />
        ))}
      </ServiceCardContainer>

      <div>
        <Link to="/work">
          <FloatingArrow />
        </Link>
      </div>
      <div>
      <Link to="/home">
          <FloatingArrowBack />
        </Link>
      </div>
    </section>
  );
};

export default About;
