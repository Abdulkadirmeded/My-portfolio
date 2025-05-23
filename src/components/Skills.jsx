import React from 'react'
import Reveal from './Reveal';
import {
    DiCss3,
    DiHtml5,
    DiJavascript1,
    DiNodejsSmall,
    DiReact,
    DiSass,
    DiBootstrap,
    DiMysql,
    DiGithubBadge,
  } from "react-icons/di";


  const skills = [
    {
        category: 'Frontend',
        technologies: [
            {name: 'HTML', icon: <DiHtml5 className='text-orange-600' />},
            {name: 'CSS', icon: <DiCss3 className='text-blue-600' />},
            {name: 'Sass', icon: <DiSass className='text-pink-600' />},
            {name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' />},
            {name: 'Javascript', icon: <DiJavascript1 className='text-yellow-600' />},
            {name: 'React', icon: <DiReact className='text-blue-500' />},
        ],
    },
    {
        category: 'Fullstack',
        technologies: [
            {name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' />},
            {name: 'MySQL', icon: <DiMysql className='text-green-500' />},
            {name: 'React', icon: <DiReact className='text-green-500' />},
            {name: 'GitHub', icon: <DiGithubBadge className='text-green-500' />},
        ]
    }
  ]

function Skills() {
  return (
    <div className='max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12' id='skills'>
      <Reveal>
      <h2 className='text-3xl font-bold mb-4 text-center '>Skills</h2>
      <p className='text-center mb-8'>
        I worked on various frontend and fullstack projects. check them  <a className='underline' href="#">there</a>
      </p>
      <div className='flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
      '>
        {skills.map((skill,index) => (
            <div key={index} className='border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg
            w-full md:w-1/2'>
                <h3 className='text-xl font-bold mb-4 text-center'>{skills.category}</h3>
                <div className='grid grid-cols-2 gap-2'>
                {skill.technologies.map((tech, index) =>(
                    <div key={index} className='flex items-center space-x-2'>
                        <span className=' text-2xl '>{tech.icon}</span>
                        <span>{tech.name}</span>
                    </div>
                ))}
             </div>
            </div>
            
        ))}
      </div>
      </Reveal>
     
    </div>
  )
}

export default Skills
