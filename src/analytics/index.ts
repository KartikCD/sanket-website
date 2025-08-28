import ReactGA from "react-ga4";
import ReactPixel from 'react-facebook-pixel';

// CRITICAL: Replace these placeholder IDs with your actual tracking IDs.
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; 
const META_PIXEL_ID = "0000000000000";

let isInitialized = false;

/**
 * Initializes Google Analytics and Meta Pixel tracking.
 * This function should be called once when the application starts.
 * It will only initialize in the 'production' environment.
 */
export const initAnalytics = () => {
  if (isInitialized || process.env.NODE_ENV !== 'production') {
    if (process.env.NODE_ENV !== 'production') {
      console.log("Analytics is disabled in development mode.");
    }
    return;
  }

  // Initialize Google Analytics
  ReactGA.initialize(GA_MEASUREMENT_ID);
  console.log("Google Analytics Initialized");

  // Initialize Meta Pixel
  const options = {
    autoConfig: true, // automatically discovers server events
    debug: false,     // disable debug logs in production
  };
  ReactPixel.init(META_PIXEL_ID, undefined, options);
  console.log("Meta Pixel Initialized");
  
  isInitialized = true;
};

/**
 * Tracks a page view for both GA and Meta Pixel.
 * @param path The path of the page being viewed (e.g., window.location.pathname + window.location.search)
 */
export const trackPageView = (path: string) => {
  if (!isInitialized) return;
  ReactGA.send({ hitType: "pageview", page: path });
  ReactPixel.pageView();
  console.log(`Analytics Page View: ${path}`);
};

/**
 * Tracks a custom event.
 * @param category A top-level category for the event (e.g., 'Navigation', 'Button').
 * @param action A description of the action (e.g., 'Header Click', 'Submit Form').
 * @param label An optional, more specific label for the event (e.g., 'About Us Link').
 */
export const trackEvent = (category: string, action: string, label?: string) => {
  if (!isInitialized) return;
  
  const eventData = { category, action, label };

  // Google Analytics Event
  ReactGA.event(eventData);

  // Meta Pixel Custom Event
  ReactPixel.trackCustom(action, { category, label });

  console.log(`Analytics Event:`, eventData);
};
