import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import './Hero.css'

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "MERN Stack Developer",
      "WordPress Developer",
      "Graphic Designer",
      "Front End Developer",
    ],
    loop: {},
  });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/souravsardar.pdf';
    link.download = 'souravsardar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };





  return (
    <div style={{ height: "90vh" }} className="ml-6 md:ml-8 md:flex justify-between">
      <div className="mt-4 md:mt-[8rem]">
        <p className="text-[#4cbcf0]">Hi, my name is,</p>
        <h1 className="text-3xl md:text-7xl   md:font-normal md:leading-normal">
          Sourav Sardar
        </h1>
        <h2 className="text-2xl md:text-5xl md:font-normal text-[#575555] ">
          I am a {text} <span /> <Cursor />
        </h2>
        <p className="mt-4  md:mt-10">I'm a passionate Full Stack web developer having an experience of</p>
        <p>web applications with React.js , Node.js , Express.js , MongoDB & TailwindCSS.</p>
        <p className="text-[#4cbcf0] mt-6 mb-6">Currently available for remote job & freelance</p>
        <button onClick={handleDownload} class="bg-transparent hover:bg-[#48b9ee] text-[#4cbcf0] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Resume</span>
</button>
        
      </div>

      <div className="box mt-8 md:mt-[8rem] h-[20rem] md:h-[25rem] w-[20rem] md:w-[25rem]" >
        
      </div>
    </div>
  );
};

export default Hero;
