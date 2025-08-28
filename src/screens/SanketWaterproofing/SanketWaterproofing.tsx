import React from "react";
import { Helmet } from "react-helmet-async";
import { AboutUs } from "./sections/AboutUs";
import { Clients } from "./sections/Clients";
import { ContactUs } from "./sections/ContactUs";
import { Expertise } from "./sections/Expertise";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { Technologies } from "./sections/Technologies";
import { WhyChooseUs } from "./sections/WhyChooseUs";
import { useScrollToHash } from "../../hooks/useScrollToHash";
import { StickySocials } from "../../components/StickySocials/StickySocials";
import { useSectionTracking } from "../../hooks/useSectionTracking";

export const SanketWaterproofing = (): JSX.Element => {
  useScrollToHash();

  // Create refs for each section to track visibility on scroll
  const technologiesRef = useSectionTracking('Technologies');
  const expertiseRef = useSectionTracking('Expertise');
  const aboutUsRef = useSectionTracking('About Us');
  const clientsRef = useSectionTracking('Clients');
  const whyChooseUsRef = useSectionTracking('Why Choose Us');
  const contactUsRef = useSectionTracking('Contact Us');

  const pageUrl = "https://www.keshaventerprises.com/";
  const title = "Keshav Enterprises - Premier Waterproofing & Structural Repair Services";
  const description = "Keshav Enterprises offers expert waterproofing, structural repair, and rehabilitation services. We provide durable, long-lasting solutions for residential, commercial, and industrial projects.";
  const imageUrl = "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
      <div className="flex flex-col w-full bg-white border-2 border-solid border-[#ced4da]">
        {/* Note: StickySocials component will need tracking added internally */}
        <div className="w-full">
          <HeaderSection/>
          {/* Attach refs to section wrapper divs for scroll tracking */}
          <div ref={technologiesRef}><Technologies /></div>
          <div ref={expertiseRef}><Expertise /></div>
          <div ref={aboutUsRef}><AboutUs /></div>
          <div ref={clientsRef}><Clients /></div>
          <div ref={whyChooseUsRef}><WhyChooseUs /></div>
          <div ref={contactUsRef}><ContactUs /></div>
          <FooterSection />
        </div>
      </div>
    </>
  );
};
