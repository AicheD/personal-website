import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ShinyEffect from './ShinyEffect';
import me from '../assets/me.png';
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
} from 'react-icons/ai';
import { motion } from 'framer-motion';

const Hero = () => {
return (
    <div className='mt-24 max-w-[4800px] mx-auto relative' id='about'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center px-10 md:px-14 md:gap-y-0 gap-y-12'>
                    <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className='md:col-span-2'
                    >
                            <TypeAnimation
                                    sequence={[
                                            "Developer",
                                            700,
                                            "Computer Engineer",
                                            1000,
                                            "Entrepreneur",
                                            2000,
                                    ]}
                                    speed={50}
                                    repeat={Infinity}
                                    className='font-bold text-gray-400 text-xl md:text-5xl italic mb-4 md:col-span-2'
                            />

                            <motion.p
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className='text-gray-200 md:text-7xl text-4xl tracking-tight mb-4'
                            >
                                    Hello, I'm
                                    <span className='bg-gradient-to-l from-orange-300 to-orange-500 bg-clip-text text-transparent'> Harry</span><span className='bg-gradient-to-l from-orange-300 to-orange-500 bg-clip-text text-transparent'> Zarcadoolas</span> 
                            </motion.p>

                            <motion.p
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className='text-gray-300 md:text-2xl text-md mb-6 max-w-[480px] md:max-w-[1200px]'
                            >
                                    I have a strong foundation in computer engineering from the <span className='font-semibold'>University of Florida</span>, complemented by experience in customer-facing roles and other practical experience. On campus, I am involved in developing proof-of-concept projects as part of UF's Dream Team Engineering with Shand's Hospital and helped found UF's new Swamp Rally Racing Team. Part-time, I also work in the Bar & Restaurant industry as a bartender with experience in barbacking, shift leads, and security. I'm always trying to push a little bit harder each day in the hope I can grow to be a better person and test my limits. In my free time, I'll probably be working out, playing basketball, doing music production, or spending time with friends and family. That, or I'm working on my next idea.
                            </motion.p>

                            <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className='flex flex-row items-center gap-6 my-4 md:mb-0 md:pt-8'
                            >
                                <motion.a 
                                    whileHover={{ scale: 1.1, boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)' }}
                                    href="https://drive.google.com/file/d/10T5aUhGZEfybTVbI0SWgjqEFeb9P1oGE/view?usp=sharing" 
                                    target="_blank"
                                    className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-blue-400 rounded-xl'
                                >
                                    View resume
                                </motion.a>

                            <div className='flex gap-6 flex-row text-4xl md:text-6xl text-blue-400 z-20'>
                                <motion.a whileHover={{ scale: 1.2}} href="https://github.com/AicheD" target="_blank" rel="noopener noreferrer">
                                    <AiOutlineGithub />
                                </motion.a>

                                <motion.a whileHover={{ scale: 1.2}} href="https://www.linkedin.com/in/harry-zarcadoolas/" target="_blank" rel="noopener noreferrer">
                                    <AiOutlineLinkedin />
                                </motion.a>
                            </div>
                        </motion.div>

                        <motion.div
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className='mt-3 md:mt-12 md:col-span-2' 
                    >
                        <p className='text-gray-300 md:text-2xl text-lg md:mb-4'>Core Technical Skills:</p>
                        <ul className='list-disc list-inside text-gray-300 md:text-xl text-md md:flex md:flex-wrap md:gap-x-16 md:gap-y-2'>
                            <li>Embedded Systems</li>
                            <li>Object-Oriented Programming (Python, C++)</li>
                            <li>Digital Logic</li>
                            <li>Machine Learning Applications for Data Science</li>
                            <li>Microprocessor Applications</li>
                            
                        </ul>
                    </motion.div>

                    </motion.div>

                    <motion.img 
                        src={me}
                        className='w-[300px] md:w-[450px] rounded-xl'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6
                         }}
                     />

                    <div>
                        <ShinyEffect left={0} top={0} size={300} md:size={1400} />
                    </div>
            </div>
    </div>
)
}

export default Hero