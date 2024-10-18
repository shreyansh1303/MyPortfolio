import React from "react";
import ProjectCard from "./ProjectCard";
import ekart from '../../assets/Yellow E-commerce Shop Bag Store Logo.png'
import music from '../../assets/Black and White Simple Music Studio Logo.png'
import weather from '../../assets/Screenshot 2024-10-18 135449.png'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="E-commerce Website"
          main="Developed a fully functional e-commerce website using HTML, CSS, and JavaScript
            •Implemented Add to Bag functionality with dynamic price calculation based on selected items.
            •Designed an intuitive user interface with seamless navigation across different pages.
            •Integrated local storage to preserve user data and shopping cart contents across sessions."
          bannerImg={ekart}
          gitLink={"https://github.com/shreyansh1303/E-commerce"}
          liveLink={"https://e-commerce-roan-eta.vercel.app/"}
        />
        <ProjectCard
          title="Music Player Application"
          main="Developed a dynamic and interactive music player application using HTML, CSS, and JavaScript. This application allows users to add new albums dynamically,the application features a fully responsive design,. Essential playback controls such as play, pause, skip, and volume adjustment are included"
          bannerImg={music}
          gitLink={"https://github.com/shreyansh1303/Music-player-application"}
          liveLink={"https://github.com/shreyansh1303/Music-player-application"}
        />
        <ProjectCard
          title="Weather Application"
          main="Developed a responsive weather application using HTML, CSS, and JavaScript. The application fetches real-time weather data from the OpenWeatherMap API and displays current conditions. Features include search functionality, dynamic weather icons, and background themes that reflect the current weather. Ensured a seamless user experience across various devices through a fully responsive design"
          bannerImg={weather}
          liveLink={"https://shreyansh1303.github.io/Weather_app/"}
          gitLink={"https://github.com/shreyansh1303/Weather_app"}
        />
      </div>
    </div>
  );
};

export default Projects;
