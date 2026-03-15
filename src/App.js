import React from 'react';
import './index.css';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

function App() {
  return (
    <div className="antialiased selection:bg-primary-accent selection:text-foreground font-sans">
      <PageLoader />
      <CustomCursor />
      <SmoothScroll>
        <main className="flex min-h-screen flex-col bg-background text-foreground">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <TechStack />
          <Contact />
        </main>
      </SmoothScroll>
    </div>
  );
}

export default App;
