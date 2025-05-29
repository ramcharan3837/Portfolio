import React from 'react'
import './Education.css'

export default function Education() {
  return (
    <div className='education-container'>
      <div className='education-firstdiv'>
        <h2>Bachelor Of Technology <span className='yellow'>CSE</span></h2>
        <p>Maharaj Vijayaram Gajapathi Raj College of Engineering (Autonomous)</p>
        <span className='yellow'>2021-2025</span>
        <span>CGPA: <span className='yellow'>8.14</span></span>
      </div>
      <div className='education-firstdiv'>
        <h2>Intermediate <span className='yellow'>MPC</span></h2>
        <p>Sri Chaitanya Junior College</p>
        <span className='yellow'>2019-2021</span>
        <span>Percentage: <span className='yellow'>92.6%</span></span>
      </div>
      <div className='education-firstdiv'>
        <h2>Secondary School </h2>
        <p>Marvel School</p>
        <span className='yellow'>2019</span>
        <span>CGPA: <span className='yellow'>9.5</span></span>
      </div>
    </div>
  )
}
