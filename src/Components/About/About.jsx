import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  FullStack developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I'm a full stack developer with experience in React, JavaScript, HTML, CSS, MongoDB, and Tailwind CSS. Skilled in the MERN stack, I build dynamic, responsive web applications, leveraging modern technologies and frameworks to create efficient, user-friendly solutions
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Problem Solver
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I'm a problem solver and a 3-star coder on CodeChef, with over 500+ problems solved across platforms like LeetCode, CodeChef, GeeksforGeeks, and Codeforces. I enjoy tackling complex challenges and improving my algorithmic skills.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Coursework
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I have a strong understanding of DBMS, Operating Systems, Computer Networks, Software Engineering, Data Structures and Algorithms, Web Technologies, Artificial Intelligence, and Compiler Design. My coursework has provided me with a solid foundation in both theoretical concepts and practical applications in Computer Science
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
