import React from 'react'
import '../Home/Home.css'
import Type from './Type'
import myImg from '../../Assets/avatar.svg'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';

export default function Home() {
    return (
        <div>
            <div>
                <div className='heading-home'>
                    <motion.p initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 0.5 }} >Hi There!<span className="wave" role="img" aria-labelledby="wave">👋🏻</span></motion.p>

                    <div className='typewriter-name'>
                        <Type />
                    </div>
                </div>
                <motion.div initial={{ y: "50px", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-50px", opacity: 0, transition: { duration: 0.25, ease: "easeInOut", delay: 0 } }} transition={{ duration: 0.75, ease: "easeInOut" }} className='d-flex bottom-content'>
                    <div className='first-div card box-shadow'>
                        <h3 className='main-content card-text '>LET ME <span className='yellow'>INTRODUCE </span> MYSELF</h3>
                        <div className='motion'>
                            <p className='card-text content'>Passionate and energetic <span className='yellow'>final-year B-Tech Computer Science student</span>. Quick to grasp new concepts and apply them
                                effectively.</p> <p className='card-text content' ><span className='yellow'>Strong problem-solving skills</span> and analytical skills, complemented by excellent teamwork and communication
                                    abilities.</p><p className='card-text content'>Seeking opportunities to enhance skills and <span className='yellow'>contribute to impactful projects</span> in the tech industry</p>
                        </div>
                    </div>
                    <div className='image'>
                        <Tilt>
                            <img src={myImg} alt='avatar' />
                        </Tilt>
                    </div>
                </motion.div>
            </div>
            <div>
                <Contact />
            </div>
            <Footer/>
        </div>
    )
}

