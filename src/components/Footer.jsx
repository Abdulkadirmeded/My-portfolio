import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';



function Footer() {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6
    md:p-20 text-sm md:text-lg mt-12'>
      <div className='space-y-4'>
        <h3 className='text-2xl text-gray-200 font-semibold'>A.kadir</h3>
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
            <a href="#"><GitHubIcon /></a>
            <a href="#"><InstagramIcon /></a>

        </div>
      </div>
      <p className='text-gray-400'>@2024 abdulkadir</p>
    </div>
    
  )
}

export default Footer
