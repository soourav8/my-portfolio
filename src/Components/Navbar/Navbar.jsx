import React from "react";

import { motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  "
            >
              <li>
                <HashLink smooth to="/#about">About</HashLink>
              </li>

              <li>
                <HashLink smooth to="/#skills">Skills</HashLink>
              </li>

              

              <li>
                <HashLink smooth to="/#projects">Projects</HashLink>
              </li>
            </ul>
            
          </div>
          <a className="btn btn-ghost normal-case text-2xl text-[#6BC7F1] font-signature mt-4">
            SouravSardar
          </a>
        </div>

        <motion.div
          className="navbar-end"
          animate={{
            y: "1rem",
          }}
          transition={{
            type: "spring",
            stiffness: 700,
          }}
        >
          <div className="navbar-end hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 ">
              <li>
                <HashLink smooth to="/#about">About</HashLink>
              </li>

              <li>
                <HashLink smooth to="/#skills">Skills</HashLink>
              </li>

              <li>
                <HashLink smooth to="/#projects">Projects</HashLink>
              </li>
            </ul>
          </div>
          <HashLink smooth to="/#contact" className="bg-transparent hover:bg-[#48b9ee] text-[#4cbcf0] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Contact
          </HashLink>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
