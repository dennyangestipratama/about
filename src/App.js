import React from 'react';
import AnimatedCursor from "react-animated-cursor"

import ScrollTop from './Components/ScrollTop'
import Hero from './Pages/Hero'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={14}
        outerSize={20}
        color='210, 230, 3'
        outerAlpha={0.4}
        innerScale={1}
        outerScale={2}
      />
      <ScrollTop />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;