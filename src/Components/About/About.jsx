import React from "react";
import frontend from "/frontend.png";
import backend from "/backend.png";
import wordpress from "/wordpress.png"
import graphic from "/graphicdesign.png";


const About = () => {
  return ( 
    <div className="about" id="about" >
      <p className="text-4xl px-5">About Me</p>
      <div className="mt-6 ">
        <p className="leading-loose px-5">
          I am a Full Stack developer specialization in MERN. I am proficient in
          both Front End and Back End development. <br /> <br /> My passion is
          creating visually br appealing Front End interfaces with powerful
          back-end systems. I am also <br /> experienced in WordPress development and
          Graphic Design . <br />
          <br /> I am a crazy Full Stack Developer who wants to explore every
          tech stack.
        </p>
      </div>
      <div     data-aos="fade-up"
     data-aos-duration="3000" className="flex items-center flex-col md:flex-row justify-between mt-10" >
        <div className=" mt-10 w-[18rem] h-[18rem]  shadow-2xl flex flex-col  justify-center items-center rounded-lg">
          <img className="" src={frontend} alt="" />
          <p className="">Front End Developer</p>
        </div>
        <div className=" mt-10 w-[18rem] h-[18rem]  shadow-2xl flex flex-col  justify-center items-center rounded-lg">
          <img className="" src={backend} alt="" />
          <p className="">Back End Developer</p>
        </div>
        <div className=" mt-10 w-[18rem] h-[18rem]  shadow-2xl flex flex-col  justify-center items-center rounded-lg">
          <img className="" src={wordpress} alt="" />
          <p className="">WordPress Developer</p>
        </div>
        <div className=" mt-10 w-[18rem] h-[18rem]  shadow-2xl flex flex-col  justify-center items-center rounded-lg">
          <img className="" src={graphic} alt="" />
          <p className="">Graphic Designer</p>
        </div>
      </div>
    </div>
  );
};

export default About;
