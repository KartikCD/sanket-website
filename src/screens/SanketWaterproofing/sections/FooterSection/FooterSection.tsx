import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";

export const FooterSection = (): JSX.Element => {
  // Company information
  const companyInfo = {
    name: "AquaShield",
    description:
      "Professional waterproofing solutions for residential and commercial properties.",
    socialIconsUrl: "/div.svg",
  };

  const isHomePage = !window.location.pathname.includes("/projects");

  // Quick links data
  const quickLinks = [
    { title: "Services", href: isHomePage ? "#services" : "/#services" },
    { title: "About Us", href: isHomePage ? "#about-us" : "/#about-us" },
    { title: "Technology", href: isHomePage ? "#technology" : "/#technology" },
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
    address: "123 Waterproof Avenue, Suite 400 Boston, MA 02110",
    phone: "+1 (555) 123-4567",
    email: "info@aquashield.com",
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
              className="w-full max-w-[284px] h-6 transition-all duration-300 hover:scale-105"
              alt="Social media icons"
              src={companyInfo.socialIconsUrl}
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
              <div className="flex items-center group transition-all duration-300 hover:translate-x-2">
                <PhoneIcon className="w-4 h-4 text-white flex-shrink-0 transition-colors duration-300 group-hover:text-[#f37021]" />
                <p className="ml-2 text-white font-normal text-base [font-family:'Poppins',Helvetica] leading-6 transition-colors duration-300 group-hover:text-gray-300">
                  {contactInfo.phone}
                </p>
              </div>
              <div className="flex items-center group transition-all duration-300 hover:translate-x-2">
                <MailIcon className="w-4 h-4 text-white flex-shrink-0 transition-colors duration-300 group-hover:text-[#f37021]" />
                <p className="ml-2 text-white font-normal text-base [font-family:'Poppins',Helvetica] leading-6 transition-colors duration-300 group-hover:text-gray-300">
                  {contactInfo.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 transition-all duration-300 hover:border-gray-600">
          <p className="text-center font-normal text-gray-300 text-base [font-family:'Poppins',Helvetica] leading-6 transition-colors duration-300 hover:text-white">
            © {new Date().getFullYear()} AquaShield Waterproofing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
