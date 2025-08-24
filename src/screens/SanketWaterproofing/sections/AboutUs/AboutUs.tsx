import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Modal } from "../../../../components/ui/modal";

import ImageCertification from '../../../../images/certificate/sanket-manerikar.jpg';

export const AboutUs = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // About us content paragraphs
  const aboutUsParagraphs = [
    "At Keshav Enterprises, we have been delivering reliable waterproofing solutions for over 7 years. As a CIDC-certified company, we strictly adhere to all standard codes and best practices, ensuring quality and safety in every project we undertake.",
    "Our expertise lies in identifying the root cause of leakage and seepage problems and providing effective solutions without causing damage to your structure. We believe in using eco-friendly products and adopting sustainable practices that protect both your building and the environment.",
    "",
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="about-us" className="w-full py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          {/* Left side - About Us text content */}
          <div className="w-full lg:w-1/2 space-y-6 self-center">
            <h2 className="font-bold font-['Poppins',Helvetica] text-3xl text-[#1c1c1c] leading-9 transition-colors duration-300 hover:text-[#f37021]">
              About Us
            </h2>

            <div className="space-y-6">
              {aboutUsParagraphs.map((paragraph, index) => (
                <p
                  key={`about-paragraph-${index}`}
                  className="font-['Poppins',Helvetica] font-normal text-[#4b4b4b] text-base leading-6"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right side - Certification card */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Card className="w-full max-w-[448px] bg-neutral-100 rounded-lg shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] border-0 cursor-pointer">
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="font-['Poppins',Helvetica] font-semibold text-[#1c1c1c] text-xl">
                    Industry Certified
                  </h3>
                </div>

                <img
                  className="h-[400px] w-full rounded-lg bg-cover bg-center cursor-pointer border"
                  src={ImageCertification}
                  alt="Construction Industry Development Council (CIDC), established by the Planning Commission (now NITI Aayog), Government of India, along with the Construction Industry."
                  onClick={openModal}
                />

                <div className="text-center pt-4">
                  <p className="font-['Poppins',Helvetica] font-normal text-[#4b4b4b] text-base">
                    Construction Industry Development Council (CIDC), established by the Planning Commission (now NITI Aayog), Government of India, along with the Construction Industry.
                  </p>
                  <p className="text-sm text-[#f37021] mt-2 font-medium cursor-pointer" onClick={openModal}>
                    Click to view certificate details
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Construction Industry Development Council (CIDC) Certification">
        <div className="space-y-6">
          <div className="flex justify-center">
            <img
              src={ImageCertification}
              alt="Construction Industry Development Council (CIDC), established by the Planning Commission (now NITI Aayog), Government of India, along with the Construction Industry."
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                {/* <h4 className="font-semibold text-[#1c1c1c] font-['Poppins',Helvetica] mb-2">Certificate Details</h4> */}
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Issued By:</span> Construction Industry Development Council (CIDC), established by the Planning Commission (now NITI Aayog), Government of India, along with the Construction Industry.</p>
                  <p><span className="font-medium">Course Completed:</span> Online (Hybrid) Course on Waterproofing and Insulation</p>
                  <p><span className="font-medium">Duration:</span> 3 Weeks</p>
                  <p><span className="font-medium">Mode:</span> Conducted Virtually</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                {/* <h4 className="font-semibold text-[#1c1c1c] font-['Poppins',Helvetica] mb-2">Company Information</h4> */}
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Period:</span> June 2024</p>
                  <p><span className="font-medium">Organized by:</span> CIDC and SIWIN</p>
                  <p><span className="font-medium">Recipient:</span> Sanket Prashant Manerikar, son of Shri Prashant Manerikar</p>
                  <p><span className="font-medium">Status:</span> <span className="text-green-600 font-medium">Active</span></p>
                </div>
              </div>
            </div>
            
            {/* <div className="bg-[#f37021]/10 p-4 rounded-lg">
              <h4 className="font-semibold text-[#1c1c1c] font-['Poppins',Helvetica] mb-2">What This Certification Means</h4>
              <p className="text-sm text-[#4b4b4b] leading-relaxed">
                This ISO 9001:2015 certification demonstrates our commitment to quality management systems. 
                It ensures that we consistently provide products and services that meet customer and regulatory 
                requirements, and that we continually improve our processes to enhance customer satisfaction.
              </p>
            </div> */}
          </div>
        </div>
      </Modal>
    </section>
  );
};