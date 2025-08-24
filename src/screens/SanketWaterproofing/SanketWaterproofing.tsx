import React from "react";
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
  return (
    <div className="flex flex-col w-full bg-white border-2 border-solid border-[#ced4da]">
      <div className="w-full">
        <HeaderSection/>
        <Banner/>
        <Clients />
        <Expertise />
        <Technologies />
        <AboutUs />
        <WhyChooseUs />
        <ContactUs />
        <FooterSection />
      </div>
    </div>
  );
};
