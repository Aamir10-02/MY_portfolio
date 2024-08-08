// import React from "react";
// import "./index.css";
// import Home from "./routes/Home";
// import About from "./routes/About";
// import Project from "./routes/Project";
// import Contact from "./routes/Contact";
// import { Route, Routes} from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";

// function App() {
//   return (
//     <>
//     <ScrollToTop />
//     <Routes>
//        <Route path="/" element={<Home />} /> 
//        <Route path="/project" element={<Project />} />
//        <Route path="/about" element={<About />} />
//        <Route path="/contact" element={<Contact />} />
//     </Routes>
    
//     </>
   
//   );
// }

// export default App;

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
