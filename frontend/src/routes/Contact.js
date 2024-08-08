import React from 'react'
import Navbar from '../components/Navbar';
import Heroimage3 from '../components/Heroimage3';
import Footer from '../components/Footer';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimage3 heading="CONTACT." text="Lets's Connect" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;