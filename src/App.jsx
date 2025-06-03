import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans scroll-smooth">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
