import React from 'react'
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import Heroimage4 from '../components/Heroimage4';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimage4 heading="ABOUT." text="I am a Passionate Developer"/>
      <AboutContent />
      {/* <Footer /> */}
    </div>
  )
}

export default About