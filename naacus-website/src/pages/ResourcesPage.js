import React, { useEffect } from 'react';
import Resources from '../components/Resources';
import PageWrapper from '../components/PageWrapper';
import { useAnalytics } from '../hooks/useAnalytics';

export default function ResourcesPage() {
  const { trackPageViewEvent } = useAnalytics();

  useEffect(() => {
    trackPageViewEvent('ResourcesPage');
  }, [trackPageViewEvent]);
  return (
    <PageWrapper>
      <Resources />
    </PageWrapper>
  );
}
