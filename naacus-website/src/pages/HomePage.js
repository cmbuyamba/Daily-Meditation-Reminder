import React from 'react';
import Hero from '../components/Hero';
import Conference2027Teaser from '../components/Conference2027Teaser';
import MemberBenefits from '../components/MemberBenefits';
import Testimonials from '../components/Testimonials';
import Conference from '../components/Conference';
import Gallery from '../components/Gallery';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <Conference2027Teaser />
      <MemberBenefits />
      <Testimonials />
      <Conference />
      <Gallery />
      <Newsletter />
      <Contact />
    </>
  );
}

export default HomePage;
