import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import logo from "../../../../images/logo/ke-logo.png";

export const FooterSection = (): JSX.Element => {
  // Company information
  const companyInfo = {
    name: "Keshav Enterprises",
    description:
      "Professional waterproofing solutions for residential and commercial properties.",
  };

  const isHomePage = !window.location.pathname.includes("/projects");

  // Quick links data
  const quickLinks = [
    { title: "Technology", href: isHomePage ? "#technology" : "/#technology" },
    { title: "Services", href: isHomePage ? "#services" : "/#services" },
    { title: "About Us", href: isHomePage ? "#about-us" : "/#about-us" },
    { title: "Clients", href: isHomePage ? "#clients" : "/#clients" },
    { title: "Projects", href: isHomePage ? "/projects" : "/projects" },
    { title: "Contact", href: isHomePage ? "#contact-us" : "/#contact-us" },
  ];

  // Services data
  const services = [
    { title: "Terrace Waterproofing", href: isHomePage ? "#services" : "/#services" },
    { title: "Sunken Lab Waterproofing", href: isHomePage ? "#services" : "/#services" },
    { title: "Podiums Waterproofing", href: isHomePage ? "#services" : "/#services" },
    { title: "Dead Walls Waterproofing", href: isHomePage ? "#services" : "/#services" },
    { title: "Parapet Waterproofing", href: isHomePage ? "#services" : "/#services" },
    { title: "Overhead Waterproofing", href: isHomePage ? "#services" : "/#services" },
  ];

  // Contact information
  const contactInfo = {
    address: "606, Bldg No 6, Satara CHS, Opposite ATI, Sion Chunabhatti, Mumbai - 400022",
    phone: "+91 87794 96622",
    email: "contact@kewaterproofing.com",
  };

  return (
    <footer className="w-full bg-[#1c1c1c] py-12 transition-all duration-300 hover:bg-[#2a2a2a]">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="flex flex-col space-y-4 transform transition-all duration-300 hover:translate-y-[-4px]">
            <h3 className="font-bold text-white text-xl [font-family:'Poppins',Helvetica] leading-7 transition-colors duration-300 hover:text-[#f37021]">
              {companyInfo.name}
            </h3>
            <p className="font-normal text-gray-300 text-base [font-family:'Poppins',Helvetica] leading-6 max-w-[226px] transition-colors duration-300 hover:text-white">
              {companyInfo.description}
            </p>
            <img
              className="w-auto h-12 transition-all duration-300 hover:scale-105"
              alt="Keshav Enterprises Logo"
              src={logo}
              style={{ objectFit: 'contain', alignSelf: 'flex-start' }}
            />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4 transform transition-all duration-300 hover:translate-y-[-4px]">
            <h3 className="font-bold text-white text-xl [font-family:'Poppins',Helvetica] leading-7 transition-colors duration-300 hover:text-[#f37021]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={`quick-link-${index}`}>
                  <a
                    href={link.href}
                    className="font-normal text-gray-300 text-base [font-family:'Poppins',Helvetica] leading-6 hover:text-[#f37021] transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-4 transform transition-all duration-300 hover:translate-y-[-4px]">
            <h3 className="font-bold text-white text-xl [font-family:'Poppins',Helvetica] leading-7 transition-colors duration-300 hover:text-[#f37021]">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={`service-${index}`}>
                  <a
                    href={service.href}
                    className="font-normal text-gray-300 text-base [font-family:'Poppins',Helvetica] leading-6 hover:text-[#f37021] transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col space-y-4 transform transition-all duration-300 hover:translate-y-[-4px]">
            <h3 className="font-bold text-white text-xl [font-family:'Poppins',Helvetica] leading-7 transition-colors duration-300 hover:text-[#f37021]">
              Contact Us
            </h3>
            <div className="space-y-5">
              <div className="flex items-start group transition-all duration-300 hover:translate-x-2">
                <MapPinIcon className="w-3 h-4 text-white mt-1 flex-shrink-0 transition-colors duration-300 group-hover:text-[#f37021]" />
                <p className="ml-2 text-white font-normal text-base [font-family:'Poppins',Helvetica] leading-6 transition-colors duration-300 group-hover:text-gray-300">
                  {contactInfo.address}
                </p>
              </div>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center group transition-all duration-300 hover:translate-x-2">
                <PhoneIcon className="w-4 h-4 text-white flex-shrink-0 transition-colors duration-300 group-hover:text-[#f37021]" />
                <p className="ml-2 text-white font-normal text-base [font-family:'Poppins',Helvetica] leading-6 transition-colors duration-300 group-hover:text-gray-300">
                  {contactInfo.phone}
                </p>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center group transition-all duration-300 hover:translate-x-2">
                <MailIcon className="w-4 h-4 text-white flex-shrink-0 transition-colors duration-300 group-hover:text-[#f37021]" />
                <p className="ml-2 text-white font-normal text-base [font-family:'Poppins',Helvetica] leading-6 transition-colors duration-300 group-hover:text-gray-300">
                  {contactInfo.email}
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 transition-all duration-300 hover:border-gray-600">
          <p className="text-center font-normal text-gray-300 text-base [font-family:'Poppins',Helvetica] leading-6 transition-colors duration-300 hover:text-white">
            © {new Date().getFullYear()} Keshav Enterprises. All rights reserved. Designed by{' '}
            <a
              href="https://kartikchawda.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#f37021] transition-colors"
            >
              Kartik Chawda
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};
