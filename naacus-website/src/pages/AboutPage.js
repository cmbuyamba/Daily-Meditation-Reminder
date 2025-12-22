import React from 'react';
import About from '../components/About';
import WhatWeDo from '../components/WhatWeDo';
import WhoWeServe from '../components/WhoWeServe';
import Objectives from '../components/Objectives';
import PageWrapper from '../components/PageWrapper';

export default function AboutPage() {
  return (
    <PageWrapper>
      <About />
      <WhatWeDo />
      <WhoWeServe />
      <Objectives />
    </PageWrapper>
  );
}
