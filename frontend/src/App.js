import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";



function App() {
  return (
    <div>
      
      <section id="home">
        <Home />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
