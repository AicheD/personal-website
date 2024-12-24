import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            opacity: 1,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        close: {
            opacity: 0,
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    }

    return (
        <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
            <div className="max-w-[4800px] mx-auto bg-blue-800 flex justify-between text-gray-200 text-3xl items-center px-12 h-20">
                <a href="#">H. Zarcadoolas</a>

                <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
                    <li>
                        <Link to="about" smooth={true} offset={50} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link to="portfolio" smooth={true} offset={50} duration={500}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} offset={50} duration={500}>Contact</Link>
                    </li>
                </ul>

                <div onClick={toggleNav} className="md:hidden z-50 text-gray-200">
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                <motion.div
                    variants={menuVariants}
                    initial={false}
                    animate={nav ? 'open' : 'close'}
                    className="fixed top-0 left-0 w-full min-h-screen bg-blue-800 z-40">
                        <ul className="font-semibold text-4xl space-y-12 text-center mt-40"> 
                        <li>
                            <Link to="about" smooth={true} offset={50} duration={500}>About</Link>
                        </li>
                        <li>
                            <Link to="portfolio" smooth={true} offset={50} duration={500}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} offset={50} duration={500}>Contact</Link>
                        </li>
                        </ul>
                    
                </motion.div>

            </div>

        </div>
    )
}

export default Navbar