import React from 'react';
import certificate from "../assets/images/certificate.png"

const Certificate = () => {
  return (
    <div className='flex flex-col justify-center gap-5 items-center'>
        <h1 className=' text-white text-4xl font-bold'>Certificate</h1>
      <img src={certificate} alt="certificate" />
    </div>
  );
};

export default Certificate;