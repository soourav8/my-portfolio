import React from "react";
import {  Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [ text ] = useTypewriter({
    words: ['Full Stack Developer', 'MERN Stack Developer', 'WordPress Developer', 'Graphic Designer'],
    loop: {},
    
  });
  return (
    <div style={{ height: "90vh" }} className="ml-6 md:ml-8">
      <div className="mt-4 md:mt-[8rem]">
        <p className="text-[#6BC7F1]">Hi, my name is,</p>
        <h1 className="text-3xl md:text-7xl   md:font-normal md:leading-normal">
          Sourav Sardar
        </h1>
        <h2 className="text-2xl md:text-5xl md:font-normal text-[#575555]">

          I am a {text} <span/> <Cursor/>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
