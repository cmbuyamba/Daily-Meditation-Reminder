import React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Objectives from './components/Objectives';
import WhatWeDo from './components/WhatWeDo';
import WhoWeServe from './components/WhoWeServe';
import Programs from './components/Programs';
import Ministries from './components/Ministries';
import Gallery from './components/Gallery';
import Conference from './components/Conference';
import Resources from './components/Resources';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Objectives />
        <WhatWeDo />
        <WhoWeServe />
        <Programs />
        <Ministries />
        <Gallery />
        <Conference />
        <Resources />
        <Newsletter />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </FluentProvider>
  );
}

export default App;
