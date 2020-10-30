import React from 'react';

import ScrollTop from './Components/ScrollTop'
import Hero from './Pages/Hero'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div className="App">
      <ScrollTop />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;