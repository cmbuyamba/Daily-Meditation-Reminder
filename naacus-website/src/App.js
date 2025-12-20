import React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import WhoWeServe from './components/WhoWeServe';
import Programs from './components/Programs';
import Conference from './components/Conference';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <WhatWeDo />
        <WhoWeServe />
        <Programs />
        <Conference />
        <Contact />
        <Footer />
      </div>
    </FluentProvider>
  );
}

export default App;
