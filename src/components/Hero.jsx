import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ShinyEffect from './ShinyEffect';
import me from '../assets/me.png';
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
} from 'react-icons/ai';
import {
    DiCss3,
    DiHtml5,
    DiJavascript1,
    DiNodejsSmall,
    DiReact
} from 'react-icons/di';
import { motion } from 'framer-motion';

const Hero = () => {
return (
    <div className='mt-24 max-w-[4800px] mx-auto relative'>
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
                            transition={{ duration: 1, delay: 0.5 }}
                            className='text-gray-200 md:text-7xl text-5xl tracking-tight mb-4'
                            >
                                    Hello, I'm
                                    <span className='bg-gradient-to-l from-orange-300 to-orange-500 bg-clip-text text-transparent'> Harry</span><span className='bg-gradient-to-l from-orange-300 to-orange-500 bg-clip-text text-transparent'> Zarcadoolas</span> 
                            </motion.p>

                            <motion.p
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1 }}
                            className='text-gray-300 md:text-2xl text-lg mb-6 max-w-[480px] md:max-w-[1200px]'
                            >
                                    I recognize how valuable each day is, so I push a little bit harder than the last in the hope I can grow to be a better person. I have a strong foundation in computer engineering from the <span className='font-semibold'>University of Florida</span>, complemented by experience in customer-facing roles and other practical experience.
                            </motion.p>

                            <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className='flex flex-row items-center gap-6 my-4 md:mb-0'
                            >
                                <motion.button whileHover={{ scale: 1.1, boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)' }}
                                    className='z-10 cursor</div>-pointer font-bold text-gray-200 md:w-auto p-4 border border-blue-400 rounded-xl'
                                >
                                    Download resume
                                </motion.button>

                            <div className='flex gap-6 flex-row text-4xl md:text-6xl text-blue-400 z-20'>
                                <motion.a whileHover={{ scale: 1.2}} href="https://github.com/AicheD" target="_blank" rel="noopener noreferrer">
                                    <AiOutlineGithub />
                                </motion.a>

                                <motion.a whileHover={{ scale: 1.2}} href="https://www.linkedin.com/in/harry-zarcadoolas/" target="_blank" rel="noopener noreferrer">
                                    <AiOutlineLinkedin />
                                </motion.a>
                            </div>
                        </motion.div>

                    </motion.div>

                    <motion.img 
                        src={me}
                        className='w-[300px] md:w-[450px] rounded-xl'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.2 }}
                     />

                    <motion.div
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 2 }}
                        className='mt-3 md:mt-10 md:col-span-3' 
                    >
                        <p className='text-gray-300 md:text-2xl text-xl md:mb-4'>Core Technical Skills:</p>
                        <ul className='list-disc list-inside text-gray-300 md:text-xl text-lg md:flex md:flex-wrap md:gap-x-16 md:gap-y-2'>
                            <li>Object-Oriented Programming (Python, C++)</li>
                            <li>Machine Learning Applications for Data Science</li>
                            <li>Digital Logic</li>
                            <li>Microprocessor Applications</li>
                            <li>Embedded Systems</li>
                        </ul>
                    </motion.div>

                    <div>
                        <ShinyEffect left={0} top={0} size={1400} />
                    </div>
            </div>
    </div>
)
}

export default Hero