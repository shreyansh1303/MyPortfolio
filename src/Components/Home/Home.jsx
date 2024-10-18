import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl tracking-tight">
    Driven software development enthusiast currently pursuing a Master's in Computer Applications (MCA) at IET
    Lucknow. Motivated by challenges, I thrive in competitive coding environments, constantly seeking to enhance my
    problem-solving skills and broaden my technical expertise. Eagerly aspiring to evolve into a proficient software
    developer, I am committed to continuous learning and growth in the dynamic realm of technology.
</p>

        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
