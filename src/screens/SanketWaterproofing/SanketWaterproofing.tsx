import React from "react";
import { Helmet } from "react-helmet-async";
import { AboutUs } from "./sections/AboutUs";
import { Clients } from "./sections/Clients";
import { ContactUs } from "./sections/ContactUs";
import { Expertise } from "./sections/Expertise";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { Banner } from "./sections/Banner";
import { Technologies } from "./sections/Technologies";
import { WhyChooseUs } from "./sections/WhyChooseUs";

export const SanketWaterproofing = (): JSX.Element => {
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
        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
      <div className="flex flex-col w-full bg-white border-2 border-solid border-[#ced4da]">
        <div className="w-full">
          <HeaderSection/>
          <Technologies />
          <Expertise />
          <AboutUs />
          <Clients />
          <WhyChooseUs />
          <ContactUs />
          {/* <Banner/> */}
          <FooterSection />
        </div>
      </div>
    </>
  );
};
