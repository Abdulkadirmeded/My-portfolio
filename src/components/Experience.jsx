import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const services = [
        "Web-develpoment",
        "Graphics design",
        "Social market management",
        "Consultancy"
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>OUR SERVICES</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {services.map((services, index) => (
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{services}</h2>
                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience