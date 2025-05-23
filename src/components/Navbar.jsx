import React, { useState } from 'react'
import { Link } from 'react-scroll';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from "motion/react"


function Navbar() {
    const [nav, setNav] = useState(false);

    const toggleNav = () =>{
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false);
    }

    const menuVariants = {
        open: {
            x: 0,
            transtion: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transtion: {
                stiffness: 20,
                damping: 15
            }
        }
    }

  return (
    <div className=' fixed top-0 w-full bg-opacity-70 '>
        <div className=' max-w-[1300px] mx-auto flex justify-between
        text-gray-200 text-xl items-center px-12 h-20'>
            <a href="#">Abdulkadir</a>
            <ul className=' text-white hidden md:flex gap-12 z-10 cursor-pointer'>
                <li>
                    <Link to="about" smooth={true} offset={50} duration={500}>About</Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} offset={50} duration={500}>Skill</Link>
                </li>
                <li>
                    <Link to="portfolio" smooth={true} offset={50} duration={500}>Portfolio</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} offset={50} duration={500}>Contact</Link>
                </li>
            </ul>
            <div onClick={toggleNav} className=' md:hidden z-50 text-gray-200'>
                {
                    nav ? <CloseIcon  size={30} /> : <MenuIcon  size={30} />
                }
            </div>
            <motion.div
            initial={false}
            animate={nav ? 'open' : 'closed'}
            variants={menuVariants}
            className=' fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40'
            >
                <ul className='font-semibold text-4xl space-y-8 mt-24 text-center'>
                <li>
                    <Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500}>About</Link>
                </li>
                <li>
                    <Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}>Portfolio</Link>
                </li>
                <li>
                    <Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>Contact</Link>
                </li>
                </ul>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar
