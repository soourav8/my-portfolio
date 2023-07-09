import React from "react";
import project1 from "../../assets/projectsImage/The-Italian-Dishes.png";
import project2 from "../../assets/projectsImage/Toy-Car-Store.png";
import project3 from "../../assets/projectsImage/Sports-Camp.png";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";

const MyProjects = () => {
  return (
    <div  className="mt-10  md:mt-[15rem] mb-10 lg:mb-[15rem]  " id="projects" >
      <div>
        <p className="text-4xl text-center mb-10 ">My Projects</p>
        <div className="flex flex-col lg:flex-row justify-around items-center gap-5" data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300">
          <div className="card card-compact w-50 md:w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="w-[20rem] h-[20rem]" src={project1} />
            </figure>

            <div className="card-body">
              <div>
                <div className="flex  justify-between leading-loose">
                  <h6>React Bootstrap|React|Firebase</h6>
                  <h6 className="flex gap-2">
                    <FaGithub />
                    <HiExternalLink />
                  </h6>
                </div>
                <div className="flex justify-between">
                  <h4 className="text-2xl">The Italian Dishes</h4>
                  <h4 className="text-2xl">2023</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-compact w-50 md:w-96 bg-base-100 shadow-xl" data-aos="fade-up"
     data-aos-duration="1000"data-aos-delay="600">
            <figure>
              <img className="w-[20rem] h-[20rem]" src={project2} />
            </figure>

            <div className="card-body">
              <div>
                <div className="flex  justify-between leading-loose">
                  <h6>Tailwind CSS|React|Firebase|ExpressJS</h6>
                  <h6 className="flex gap-2">
                    <Link to="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-soourav8">
                    <FaGithub />
                    </Link>
                    <Link to="https://toy-shop-1be7e.web.app/">
                    <HiExternalLink />
                    </Link>
                  </h6>
                </div>
                <div className="flex justify-between">
                  <h4 className="text-2xl">Toy Car Store</h4>
                  <h4 className="text-2xl">2023</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-compact w-50 md:w-96 bg-base-100 shadow-xl"  data-aos="fade-up" data-aos-duration='1000' data-aos-delay="900">
            <figure>
              <img className="w-[20rem] h-[20rem]" src={project3} />
            </figure>

            <div className="card-body">
              <div>
                <div className="flex  justify-between leading-loose">
                  <h6>Tailwind CSS|React|Firebase|ExpressJS</h6>
                  <h6 className="flex gap-2">
                    <Link to ="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-soourav8.git ">
                    < FaGithub />
                    
                    </Link>
                    <Link to ="https://summer-camp-91c0b.web.app/">
                    <HiExternalLink />
                    </Link>
                  </h6>
                </div>
                <div className="flex justify-between">
                  <h4 className="text-2xl">Sports Camp</h4>
                  <h4 className="text-2xl">2023</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
