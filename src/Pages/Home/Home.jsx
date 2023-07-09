import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import { BrowserRouter,} from "react-router-dom";
import Skills from "../../Components/Skills/Skills";

import MyProjects from "../../Components/MyProjects/MyProjects";
import Design from "../../Components/Design/Design";
import Contact from "../../Components/Contact/Contact";
import Copyright from "../../Components/Copyright/Copyright";

const Home = () => {
  return (
    <BrowserRouter>
    
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Design></Design>
      <MyProjects></MyProjects>
      <Contact></Contact>
      <Copyright></Copyright>
    </BrowserRouter>
   
    
  );
};

export default Home;
