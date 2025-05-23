import React from 'react';
import project1 from "../assets/images/project1.png"
import project2 from "../assets/images/project2.png"
import project3 from "../assets/images/project3.png"
import project4 from "../assets/images/project4.png"
import project5 from "../assets/images/project5.png"
import project6 from "../assets/images/project6.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';


const projects = [
    {
      img: project1,
      title: "Vanilla javaScript",
      description: "interactive features and optimizing performance with clean and efficient code.",
      links: {
        site: "#",
        github: "https://github.com/Abdulkadirmeded",
      },
    },
    {
      img: project2,
      title: "NETFLIEX-clone",
      description: "A fullstack website of NETFLIEX-clone React.js, Axios API-fatching and firebase.",
      links: {
        site: "https://github.com/Abdulkadirmeded/netfliex-clone",
        github: "https://github.com/Abdulkadirmeded/netfliex-clone",
      },
    },
    {
      img: project3,
      title: "Amazon-clone",
      description: "Responsive and Dynamic e-commerce platform with various features.",
      links: {
        site: "https://github.com/Abdulkadirmeded/amazon-clone",
        github: "https://github.com/Abdulkadirmeded/amazon-clone",
      },
    },
    {
      img: project4,
      title: "protfolilo-project",
      description: "Responsie and Dynamic e-commerce platform with various features.",
      links: {
        site: "#",
        github: "https://github.com/Abdulkadirmeded",
      },
    },
    {
      img: project5,
      title: "frontend e-learning project",
      description: "Responsive react portfolio project",
      links: {
        site: "https://github.com/Abdulkadirmeded/elerning-project",
        github: "https://github.com/Abdulkadirmeded/elerning-project",
      },
    },
    {
      img: project6,
      title: "Food-delevery",
      description: "interactive features and optimizing performance with clean and efficient code.",
      links: {
        site: "https://github.com/Abdulkadirmeded",
        github: "https://github.com/Abdulkadirmeded",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
           <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio
