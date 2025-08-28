import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import logo from "../../../../images/logo/ke-logo.png";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../../../../analytics";


export const HeaderSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = !window.location.pathname.includes("/projects");
  
  const navigate = useNavigate();

  const navItems = [
    { label: "Technology", href: isHomePage ? "#technology" : "/#technology" },
    { label: "Services", href: isHomePage ? "#services" : "/#services" },
    { label: "About", href: isHomePage ? "#about-us" : "/#about-us" },
    { label: "Clients", href: isHomePage ? "#clients" : "/#clients" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: isHomePage ? "#contact-us" : "/#contact-us" },
  ];


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full h-16 bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto h-full max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-full">
          <a href="/" className="flex items-center gap-2 transform transition-transform duration-300 hover:scale-105" onClick={() => trackEvent('Navigation', 'Header Click', 'Logo')}>
            <img src={logo} alt="Keshav Enterprises Logo" className="h-10" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-8">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      onClick={() => trackEvent('Navigation', 'Header Click', item.label)}
                      className="font-['Poppins',Helvetica] font-normal text-[#1c1c1c] text-base leading-6 transition-all duration-300 hover:text-[#f37021] hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#f37021] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button 
              onClick={() => {
                trackEvent('Button', 'Header Click', 'Get Quote');
                if (isHomePage) {
                  document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                } else {
                  navigate("/#contact-us");
                }
              }} 
              className="bg-[#f37021] hover:bg-[#e06418] text-white font-bold font-['Poppins',Helvetica] px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Get Quote
            </Button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md transition-all duration-300 hover:bg-gray-100 transform hover:scale-110"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-[#1c1c1c] transition-transform duration-300 rotate-180" />
            ) : (
              <Menu className="h-6 w-6 text-[#1c1c1c] transition-transform duration-300" />
            )}
          </button>
        </div>

        <div
          className={`lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block font-['Poppins',Helvetica] font-normal text-[#1c1c1c] text-base leading-6 py-2 px-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-[#f37021] transform hover:translate-x-2"
                onClick={() => {
                  trackEvent('Navigation', 'Mobile Header Click', item.label);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <Button 
              className="w-full bg-[#f37021] hover:bg-[#e06418] text-white font-bold font-['Poppins',Helvetica] py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-4"
              onClick={() => {
                trackEvent('Button', 'Mobile Header Click', 'Get Quote');
                if (isHomePage) {
                  document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                } else {
                  navigate("/#contact-us");
                }
                setIsMobileMenuOpen(false)
              }}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
