import React from "react";
import { styles } from "../styles";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

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
        position: "fixed",  
        bottom: "20px",
        right: "20px",
      }}
    ></motion.div>
  );
};


const Home = () => {
  return (
    <Section id="home" className="relative w-full h-screen mx-auto">
      <div className={`max-w-7xl mx-auto ${styles.padding1} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.HeadText} text-white`}>
            Hello, I'm <span className="text-[#5eeaff]">Plamen</span>
          </h1>
          <p className={`${styles.SubText} mt-8`}>
            I create digital content for the internet.
          </p>
          <a href="https://github.com/torbalansky" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10 inline-block">
          Visit my GitHub
       </a>
        </div>
      </div>
      <div>
        <Link to="/about">
          <FloatingArrow />
        </Link>
      </div>
    </Section>
  );
};

export default Home;
