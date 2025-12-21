import React from 'react';
import Hero from '../components/Hero';
import Conference2027Teaser from '../components/Conference2027Teaser';
import MemberBenefits from '../components/MemberBenefits';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import WhatWeDo from '../components/WhatWeDo';
import WhoWeServe from '../components/WhoWeServe';
import Programs from '../components/Programs';
import Conference from '../components/Conference';
import Leadership from '../components/Leadership';
import Objectives from '../components/Objectives';
import Ministries from '../components/Ministries';
import Gallery from '../components/Gallery';
import Resources from '../components/Resources';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <Conference2027Teaser />
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
    </>
  );
}

export default HomePage;
