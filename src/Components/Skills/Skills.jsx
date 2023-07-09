import React from "react";
import "./Skills.css";
import frontend from "../../assets/lottie/frontend-cold.json";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
import tailwind from "../../assets/icons/tailwind.png";
import javascript from "../../assets/icons/javascript.png";
import react from "../../assets/icons/react.png";
import mongodb from "../../assets/icons/mongodb.png";
import node from "../../assets/icons/node.png";
import ex from "../../assets/icons/expressjs.png";
import scss from "../../assets/icons/scss.png";
import git from "../../assets/icons/git.png";
import next from "../../assets/icons/next.png";



import Lottie from "lottie-react";



const Skills = () => {
  return (
    <div className="skills mt-[15rem] mb-20" id="skills">
      <p className="text-4xl  text-center mb-10">What I do</p>
      <div className="flex flex-col justify-around items-center lg:flex-row px-5  " >
        <div className=" w-[18rem] md:w-[30rem] " data-aos="fade-up-right" data-aos-duration="1200" >
          <Lottie  animationData={frontend} />
        </div>
        <div>
          <p className="text-3xl text-[#575555] text-center mt-10">
            Full Stack Development
          </p>
          <div className=" flex justify-center  gap-2 mt-6 md:mt-20  " data-aos="fade-up-left" data-aos-duration="1200">
            <img
              className=" p-5 invisible md:visible border rounded-full shadow-2xl"
              src={html}
              alt=""
            />
            <img
              className="p-5 invisible md:visible border rounded-full shadow-2xl"
              src={css}
              alt=""
            />
            <img
              className="p-5 invisible md:visible border rounded-full shadow-2xl"
              src={tailwind}
              alt=""
            />
            <img
              className="p-5 invisible md:visible border rounded-full shadow-2xl"
              src={javascript}
              alt=""
            />
            <img
              className="p-5 invisible md:visible border rounded-full shadow-2xl"
              src={react}
              alt=""
            />
            <img
              className="p-5 invisible md:visible border rounded-full shadow-2xl"
              src={mongodb}
              alt=""
            />
            <img
              className="p-5 invisible md:visible border rounded-full shadow-2xl"
              src={scss}
              alt=""
            />
          </div>
          <div className="flex justify-center gap-2 mt-6 ">
            
            <img
              className="p-5 invisible md:visible border rounded-full shadow-2xl"
              src={node}
              alt=""
            />
            <img
              className="p-5 invisible md:visible border rounded-full shadow-2xl"
              src={ex}
              alt=""
            />
            <img
              className="p-5 invisible md:visible border rounded-full shadow-2xl"
              src={next}
              alt=""
            />
            <img
              className="p-5 invisible md:visible border rounded-full shadow-2xl"
              src={git}
              alt=""
            />
          </div>
          <div className="mt-0 md:mt-20 leading-loose">
          <p> &#x25ba;  Building responsive static websites using Next.js</p>
          <p> &#x25ba; Building responsive Single Page Apps in React.js</p>
          <p> &#x25ba; Building RESTful APIs in Express</p>
          </div>
        </div>
        
      

        

      </div>
      

    </div>
  );
};

export default Skills;
