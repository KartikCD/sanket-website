import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../analytics';

/**
 * A custom hook that tracks page views whenever the route changes.
 * This should be used in a top-level component within the Router's context.
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Tracks the page view on initial load and subsequent route changes.
    trackPageView(location.pathname + location.search);
  }, [location]);
};
