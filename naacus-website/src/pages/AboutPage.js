import React, { useEffect } from 'react';
import About from '../components/About';
import WhatWeDo from '../components/WhatWeDo';
import WhoWeServe from '../components/WhoWeServe';
import Objectives from '../components/Objectives';
import PageWrapper from '../components/PageWrapper';
import { useAnalytics } from '../hooks/useAnalytics';

export default function AboutPage() {
  const { trackPageViewEvent } = useAnalytics();

  useEffect(() => {
    trackPageViewEvent('AboutPage');
  }, [trackPageViewEvent]);
  return (
    <PageWrapper>
      <About />
      <WhatWeDo />
      <WhoWeServe />
      <Objectives />
    </PageWrapper>
  );
}
