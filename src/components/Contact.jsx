import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Reveal from './Reveal';



function Contact() {
  return (
    <div className='px-6 max-w-[1000px] mx-auto md:my-12' id='contact'>
        <Reveal>
        <div className=' grid md:grid-cols-2 place-items-center '>
            <div>
                <div className=' text-gray-300 my-3 '>
                    <h3 className='text-4xl font-semibold mb-5'>About <span>Me</span></h3>
                    <p className=' justify-center leading-7 w-11/12 mx-auto'>
                    FULL-STACK DEVELOPER[with a proficient in JavaScript, React.js, Node.js, MYSQL] 
                    passionate about high quality product delivery
                    </p>
                </div>

                <div className='flex mt-10 items-center gap-7'>
                    <div className='bg-gray-400/40 p-5 rounded-lg'>
                        <h3 className=' cursor-pointer md:text-4xl text-2xl font-semibold text-white'>8
                            <span>+</span>
                        </h3>
                    <p className=' text-xs md:text-base'>Projects</p>
                    </div>

                    <div className='bg-gray-400/40 p-5 rounded-lg'>
                        <h3 className=' cursor-pointer md:text-4xl text-2xl font-semibold text-white'>2
                            <span>+</span>
                        </h3>
                    <p className=' text-xs md:text-base'>Yearof experience</p>
                    </div>

                    <div className='bg-gray-400/40 p-5 rounded-lg'>
                        <h3 className=' cursor-pointer md:text-4xl text-2xl font-semibold text-white'>15
                            <span>+</span>
                        </h3>
                    <p className=' text-xs md:text-base'>Happpy clients</p>
                    </div>
                </div>
            </div>
            <form 
                action='https://getform.io/f/agddzzvb'
                method='POST'
                className='max-w-6xl p-5 md:p-12'
                id='form'
            >
            <p className='text-gray-100 font-bold text-xl mb-2'>
                Let's connect</p>
                <input type="text" id='name'
                    placeholder='Your Name...'
                    name='name'
                    className='mb-2 w-full rounded-md border 
                    border-purple-600 py-2 pl-2 pr-4'
                />

                <input type="email" id='email'
                    placeholder='Your Email...'
                    name='email'
                    className='mb-2 w-full rounded-md border 
                    border-purple-600 py-2 pl-2 pr-4'
                />

                <textarea name="textarea" id="" 
                cols="30"
                rows="4"
                placeholder='Your Message ...'
                className=' mb-2 w-full rounded-md border border-purple-600
                py-2 pl-2 pr-4 '
                
                />

                <button
                type='submit'
                className='w-full py-3 rounded-md text-gray-100 font-semibold
                text-xl bg-primary-color'
                >
                SUBMIT</button>


            </form>
        </div>
        </Reveal>
    </div>
  )
}

export default Contact
