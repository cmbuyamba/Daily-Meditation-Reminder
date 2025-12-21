import React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import MemberBenefits from './components/MemberBenefits';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Leadership from './components/Leadership';
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
        <MemberBenefits />
        <Testimonials />
        <About />
        <WhatWeDo />
        <WhoWeServe />
        <Programs />
        <Conference />
        <Leadership />
        <Objectives />
        <Ministries />
        <Gallery />
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
