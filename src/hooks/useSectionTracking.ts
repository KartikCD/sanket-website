import { useEffect, useRef } from 'react';
import { trackEvent } from '../analytics';

/**
 * A custom hook to track when a section becomes visible in the viewport.
 * It uses the IntersectionObserver API to fire a tracking event once.
 * @param sectionName The name of the section to be used in the analytics event.
 * @returns A ref object to be attached to the section's container element.
 */
export const useSectionTracking = (sectionName: string) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element is intersecting (visible)
        if (entry.isIntersecting) {
          trackEvent('Scroll', 'View Section', sectionName);
          // Stop observing after the event is sent to avoid duplicate tracking
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        root: null, // Observe against the viewport
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [sectionName]);

  return ref;
};
