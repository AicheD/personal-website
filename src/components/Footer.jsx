import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-6'>
      <div className='space-y-4'>
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
          <a href="https://github.com/AicheD" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/in/harry-zarcadoolas/AicheD" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <p className='text-gray-400'>@2025 H. Zarcadoolas</p>
    </div>
  );
}

export default Footer;