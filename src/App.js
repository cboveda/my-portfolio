import React from 'react';
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
// import Projects from "./components/Projects"
// import Skills from "./components/Skills"
import Endorsements from "./components/Endorsements"

function App() {
  return (
    <main className="root bg-background">
      <Navbar />
      <About />
      <Endorsements />
    { /*<Skills /> 
      <Projects /> */ }
      <Contact />
    </main>
  );
}

export default App;
