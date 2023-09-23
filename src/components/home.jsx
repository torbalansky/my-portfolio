import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import homeImg from "../img/home.png";

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


const Home = () => {
  return (
    <section id="home" className="h-full w-full flex justify-between custom-media">
      <div className={`flex pl-20 pt-20 flex-row justify-center flex-2 items-start gap-10 h-full w-full`}>
        <div className="flex justify-center items-center mt-5">
          <div className="w-5 sm:h-80 h-40 violet-gradient mr-5 custom-media2" />
        <div>
          <h1 className={`${styles.HeadText} text-white`}>
            Hello, I'm <span className="text-[#5eeaff]">Plamen.</span>
          </h1>
          <p className={`${styles.SubText} mt-8`}>
            I create digital content <br></br> for the internet.
          </p>
          <a href="https://github.com/torbalansky" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10 inline-block">
          Visit my GitHub
       </a>
        </div>
      </div>
      </div>
      <div className="relative flex flex-3 h-full w-full">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={2} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial color="#804dee" attach="material" distort={0.6} speed={0.4}/>
            </Sphere>
          </Canvas>
          <img src={homeImg} alt="HomeImage" className="w-[300px] h-[300px] object-contain absolute inset-0 m-auto animate-spin-slow alternate ease-in-out infinite"/>
        </div>
      <div>
        <Link to="/about">
          <FloatingArrow />
        </Link>
      </div>
    </section>
  );
};

export default Home;
