import React from 'react'
import '../../Components/Projects/Projects.css'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'
import HospitalImg from '../../Assets/Hospital.png'
import Comparision from '../../Assets/Comparision.png'
import Portfolio from '../../Assets/Portfolio.png'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'

export default function Projects() {
    return (
        <div>
            <div className='about-mainheading'>
                <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 0.5 }}>MY <span className='yellow'>PROJECTS</span></motion.h1>
            </div>
            <div className='project-maindiv'>
                <ProjectCard imgPath={HospitalImg} heading='Hospital Management' description='Developed an innovative "Hospital Management System " as a
web application using MERN stack. Proficiently implemented
CRUD operations, establishing a dynamic platform for
seamless experiences through auctions.' ghlink='https://github.com/pranav02082003/Hospital-front-end' viewlink='https://hospital-management-h3r1.onrender.com/' />
                <ProjectCard imgPath={Comparision} heading='Product Price Comparision' description='Designed a interactive website "Product Price Comparison" where we stored products in database and an API and
compares the price of the same products showcasing my
proficiency in MERN stack Web Development' ghlink='https://github.com/pranav02082003/Comparison-front-end' viewlink='https://comparison-front-end.onrender.com/' />
                <ProjectCard imgPath={Portfolio} heading='Personal Portfolio' description='Created an interactive portfolio utilizing a combination of
React, CSS and Bootstrap frameworks. Designed and
implemented various projects, showcasing my skill and
interest in Web Development' ghlink='https://github.com/pranav02082003/Latest-Portfolio' viewlink='https://latest-portfolio-dvh5.onrender.com' />
            </div>
            <div>
                <Contact />
            </div>
            <Footer/>
        </div>
    )
}
