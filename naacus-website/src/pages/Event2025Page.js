import React, { useEffect } from 'react';
import { Naacus2025Accomplishments } from '../components/naacus2025';
import { useAnalytics } from '../hooks/useAnalytics';

function Event2025Page() {
  const { trackPageViewEvent } = useAnalytics();

  useEffect(() => {
    trackPageViewEvent('Event2025Page');
  }, [trackPageViewEvent]);
  return <Naacus2025Accomplishments />;
}

export default Event2025Page;
