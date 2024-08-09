import React from 'react';
import Navbar from '../components/Navbar';
import Heroimage2 from '../components/Heroimage2';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading= "PROJECTS." text="My Work"/>
      <Work />
    </div>
  );
};

export default Project;