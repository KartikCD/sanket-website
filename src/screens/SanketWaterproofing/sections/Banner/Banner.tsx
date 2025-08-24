import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

import BannerSvg from '../../../../images/banner/banner.svg';

export const Banner = (): JSX.Element => {
  // Form field data
  const formFields = [
    {
      id: "name",
      label: "Your Name",
      placeholder: "John Doe",
    },
    {
      id: "phone",
      label: "Phone Number",
      placeholder: "+1 (555) 123-4567",
    },
    {
      id: "email",
      label: "Email Address",
      placeholder: "you@example.com",
    },
  ];

  return (
    <section id="get-quote" className="w-full bg-neutral-100 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side image */}

          <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] rounded-lg overflow-hidden self-center">
            <object
              className="absolute inset-0 w-full h-full"
              data={BannerSvg}
              aria-label="Waterproofing Banner"
              type="image/svg+xml"
              title="Waterproofing Banner"
              width="100%"
              height="100%"
            />
            {/* Optionally, overlay content here */}
          </div>

          {/* Right side form */}
          <Card className="w-full lg:w-1/2 shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a]">
            <CardContent className="p-6">
              <h2 className="font-bold text-2xl text-[#1c1c1c] font-['Poppins',Helvetica] mb-6">
                Get a Free Quote
              </h2>

              <div className="space-y-4">
                {/* Form fields */}
                {formFields.map((field) => (
                  <div key={field.id} className="space-y-2">
                    <label
                      htmlFor={field.id}
                      className="block font-medium text-sm text-[#1c1c1c] font-['Poppins',Helvetica]"
                    >
                      {field.label}
                    </label>
                    <Input
                      id={field.id}
                      className="h-[42px] font-['Poppins',Helvetica] text-[#adaebc] focus:border-[#f37021] focus:ring-2 focus:ring-[#f37021]/20"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                {/* Service Type dropdown */}
                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="block font-medium text-sm text-[#1c1c1c] font-['Poppins',Helvetica]"
                  >
                    Service Type
                  </label>
                  <div className="relative">
                    <Select>
                      <SelectTrigger
                        id="service"
                        className="h-[43px] font-['Poppins',Helvetica] text-[#1c1c1c] focus:border-[#f37021] focus:ring-2 focus:ring-[#f37021]/20"
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </Select>
                  </div>
                </div>

                {/* Submit button */}
                <Button className="w-full h-10 mt-6 bg-[#f37021] hover:bg-[#e06418] text-white font-bold font-['Poppins',Helvetica]">
                  Get My Free Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};