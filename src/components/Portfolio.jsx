import React from 'react';
import project1 from "../assets/usart.jpg";
import project2 from '../assets/vehicle-trajectory-k-means.png';
import project3 from '../assets/file-system-management-project.png';
import project4 from '../assets/cpu-flowchart.png';
import project5 from '../assets/enrichment-results.png';
import project6 from '../assets/final-circuit.jpg';
import project7 from '../assets/air-embolism.png';
import project8 from '../assets/light-and-sound-code.png';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { Link } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';

const projects = [
  {
    img: project4,
    title: "8-Instruction Elementary CPU",
    description: "In this project I designed an elementary Central Processing Unit from a Read-Only Memory. I handled a 3-bit instruction field by means of RALU with state machine controller, Instruction Register, Program Counter (and memory module to fetch instructions automatically) . UF Course: EEL3701",
    links: {
      site: "https://docs.google.com/document/d/1YA0oBJSg0zlRtVzc56QF_4kGFHYPswR0/edit?usp=sharing&ouid=109705304558126172386&rtpof=true&sd=true"
    },
  },
  {
    img: project3,
    title: "User-Space File System",
    description: "Operating in a Reptilian OS Linux environment, I developed a library to implement a file system based on the handling of a WAD file and implemented a userspace daemon via FUSE to access the directory once mounted. UF Course: COP4600",
    links: {
      
    },
  },
  {
    img: project1,
    title: "USART Lab on ATxmega128A1U Microprocessor",
    description: "In this project, I experimented with the functionality of the Universal Synchronous/Asynchronous Receiver Trasmitter (USART) on the ATxmega128A1U microprocessor. I transmitted strings and characters, measuring baud rate in the process. I additionally incorporated interrupt-based receiving. UF Course: EEL4744",
    links: {
      site: "https://docs.google.com/document/d/1PM1EmGrb9Sz39Q7PguafUdMEzqIbDzIM/edit?usp=sharing&ouid=109705304558126172386&rtpof=true&sd=true"
    },
  },
  {
    img: project7,
    title: "Air Embolism Detection Project",
    description: "The software developed was a proof-of-concept python executable designed to detect the presence of air bubbles in the blood and alert the user. I worked as part of UF's Dream Team Engineering with a team of 4 undergraduate students and medical professionals from Shand's Hospital Cardiothoracic Division. This project will be sent to Cincinnati Children’s Hospital in the near future for clinical testing.",
    links: {

    },
  },
  {
    img: project2,
    title: "SUMO Traffic Clustering Analysis",
    description: "Using data from the Simulation of Urban Mobility (SUMO), I analyzed a busy intersection West University Avenue and Buckman Drive/NW 17th St., Gainesville, FL by using vehicle trajectories and time taken to predict the path a vehicle will take. UF Course: CAP4770",
    links: {
      github: "https://github.com/AicheD/SUMO-traffic-sim-clustering",
    },
  },
  {
    img: project5,
    title: "Gallus Gallus (Chicken) Thermal Condition Bioinformatic Analysis",
    description: "By analyzing the effect on gene expression of Gallus Gallus (Chicken) in response to thermal conditions, I was able to determine the effect of heat stress. Working in a python environment, my team and I conducted PCA analysis, differential expression analysis, gene set enrichment analysis, and also experimented with clustering and predictive modelling methods for categorizing effects. UF Course: CGS4144",
    links: {
      github: "https://github.com/AicheD/gallus-gallus-bioinformatics",
    },
  },
  {
    img: project6,
    title: "Multifunctional Audio Amplifier Circuit",
    description: "This final project circuit essentially involved the design of a multifunctional audio amplifier circuit. Its purpose was to enhance certain input frequencies as well as analyze the audio signal through a series of processing stages. UF Course: EEL3111C",
    links: {

    },
  },
  {
    img: project8,
    title: "Light and Sound Alzheimer's Research Project",
    description: "Starting of as a shadower in this project, I collaborated with a UF Dream Team Engineering team to develop a recording module that would record the light and sound environment of a patient's room. This data would be used to analyze the effects of light and sound on Alzheimer's patients. Arduino (C++) was mainly used as the environment of the project.",
    links: {
      
    },
  },

]

const Portfolio = () => {
  return (
    <motion.div 
    initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        >
      <h2 className='text-4xl font-bold text-gray-200 mb-8 text-center' id="portfolio">Portfolio</h2>
      <div className='flex justify-center mb-8'>
        <Link to="portfolio" smooth={true} offset={50} duration={500}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className='text-gray-200 text-3xl cursor-pointer'
          >
            <FaArrowDown />
          </motion.div>
        </Link>
      </div>
      <div className='max-w-[1600px] mx-auto px-12 md:my-20'>
        <Reveal>
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
              <div className='w-full md:w-1/2 md:mr-4'>
                <img
                  src={project.img}
                  alt={project.title}
                  className='w-full h-full object-cover rounded-lg shadow-lg'
                />
              </div>
              <div className='w-full md:w-1/2 md:ml-4 flex flex-col justify-center'>
                <h3 className='text-2xl font-semibold text-gray-200 mb:4 mt-2 md:mt-0'>{project.title}</h3>
                <p className='text-gray-300 mb:4'>{project.description}</p>
                <div className='flex space-x-4'>
                  {project.links.site && (
                    <a href={project.links.site} target="_blank" rel="noopener noreferrer"
                      className='mt-2 md:mt-3 px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-500 transition duration-200'
                    >
                      View Report
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                      className='mt-2 md:mt-3 px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-500 transition duration-200'
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </motion.div>
  )
}

export default Portfolio;