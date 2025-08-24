import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import AdaniClient from '../../../../images/clients/adani.svg';
import AtharvaGroupClient from '../../../../images/clients/atharva-group.png';
import AvadhGroupClient from '../../../../images/clients/avadh-group.webp';
import EkoStayClient from '../../../../images/clients/ekostay.png';
import GingerClient from '../../../../images/clients/ginger.svg';
import NSTIClient from '../../../../images/clients/nsti.jpeg';
import SankeshGroupClient from '../../../../images/clients/sankesh-grpu.jpeg';
import SethGroupClient from '../../../../images/clients/seth-grpu.png';
import ShirkeGroupClient from '../../../../images/clients/shirke-group.png';
import SkylineGroupClient from '../../../../images/clients/skyline-group.png';
import TataProjectClient from '../../../../images/clients/tata-project.webp';


const clients = [
  {
    id: 1,
    name: "Adani Group",
    backgroundColor: "",
    logo: AdaniClient,
  },
  {
    id: 2,
    name: "Atharva Group",
    backgroundColor: "#0e243d",
    logo: AtharvaGroupClient,
  },
  {
    id: 3,
    name: "Avadh Group",
    backgroundColor: "",
    logo: AvadhGroupClient,
  },
  {
    id: 4,
    name: "Ekostay",
    backgroundColor: "#000",
    logo: EkoStayClient,
  },
  {
    id: 5,
    name: "Ginger Hotels and Hospitality",
    logo: GingerClient,
    backgroundColor: ""
  },
  {
    id: 6,
    name: "National Skill Training Institute Of India",
    logo: NSTIClient,
    backgroundColor: ""
  },
  {
    id: 7,
    name: "Sankesh Group",
    logo: SankeshGroupClient,
    backgroundColor: ""
  },
  {
    id: 8,
    name: "Sheth Group",
    logo: SethGroupClient,
    backgroundColor: ""
  },
  {
    id: 9,
    name: "Shirke Group",
    logo: ShirkeGroupClient,
    backgroundColor: ""
  },
  {
    id: 10,
    name: "Skyline Group",
    logo: SkylineGroupClient,
    backgroundColor: "#000"
  },
  {
    id: 11,
    name: "Tata Projects",
    logo: TataProjectClient,
    backgroundColor: ""
  },
];


export const Clients = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 5; // how many logos to show at once
  const [start, setStart] = useState(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (timer.current) {
      timer.current = window.setInterval(() => {
        setStart((prev) => (prev + 1) % clients.length);
        // console.log("Auto-scrolling...");
      }, 2000);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  // Looping visible logos
  const getVisible = () => {
    if (clients.length <= visibleCount) return clients;
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(clients[(start + i) % clients.length]);
    }
    return result;
  };


  // Client logos data - using placeholder images from Pexels


  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(clients.length / 4));
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [clients.length]);

  // Get visible clients (4 at a time)
  const getVisibleClients = () => {
    const startIndex = currentIndex * 4;
    return clients.slice(startIndex, startIndex + 4);
  };

  return (
    <section id="clients" className="w-full py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl text-[#1c1c1c] font-['Poppins',Helvetica] mb-4 leading-9 transition-colors duration-300 hover:text-[#f37021]">
            Our Clients
          </h2>
          <p className="font-normal text-base text-[#4b4b4b] font-['Poppins',Helvetica] leading-6 max-w-2xl mx-auto">
            Proudly serving a diverse range of clients with quality waterproofing solutions.
          </p>
        </div>

        {/* Carousel Container */}
        {/* <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(clients.length / 4) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {clients.slice(slideIndex * 4, slideIndex * 4 + 4).map((client) => (
                    <div
                      key={client.id}
                      className="relative flex items-center justify-center p-6 bg-white rounded-lg shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group"
                    >
                      <div className="w-32 h-20 bg-gray-100 rounded-lg overflow-hidden transition-all duration-300 group-hover:bg-gray-50">
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                        />
                      </div>
                      
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#1c1c1c] text-white px-3 py-2 rounded-lg text-sm font-medium font-['Poppins',Helvetica] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
                        {client.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#1c1c1c]"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="flex justify-center gap-8">
          {getVisible().map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-lg shadow-[0_2px_8px_#0000000d] flex items-center justify-center w-36 h-20 p-2 transition-all"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-[110px] object-contain"
                draggable="false"
              />
            </div>
          ))}
        </div> */}

        {/* Carousel Indicators */}
        {/* <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(clients.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#f37021] scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
        {/* <div className="flex justify-center gap-2 mt-4">
          {clients.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === start ? "bg-[#f37021]" : "bg-gray-300"
                }`}
              onClick={() => setStart(idx)}
              aria-label={`Go to client ${idx + 1}`}
            />
          ))}
        </div> */}
        <Swiper
          slidesPerView={5}
          spaceBetween={32}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 1800, disableOnInteraction: false }}
          className="w-full"
          breakpoints={{
            // mobile
            320: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            // tablet
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // desktop
            1024: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
          }}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className={`bg-white rounded-lg flex items-center justify-center w-36 h-20`}>
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`max-h-16 max-w-[110px] object-fit `}
                  draggable={false}
                  style={{ backgroundColor: client.backgroundColor || ""}}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};