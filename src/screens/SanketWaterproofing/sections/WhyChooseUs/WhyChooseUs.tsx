import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

import { Medal, Clock4, Leaf, BookA } from "lucide-react";

export const WhyChooseUs = (): JSX.Element => {
  // Data for the feature cards
  const features = [
    {
      id: 1,
      title: "Expertise in Penetrative Waterproofing",
      description:
        "Our team has specialized knowledge and years of experience in advanced penetrative waterproofing techniques.",
      iconUrl: <Medal size={18} color="#ffffff" aria-label="Expertise in Penetrative Waterproofing" />,
    },
    {
      id: 2,
      title: "Long-lasting Solutions",
      description:
        "Our waterproofing treatments are designed to provide durable protection that lasts for years to come.",
      iconUrl: <Clock4 size={18} color="#ffffff" aria-label="Long-lasting Solutions" />,
    },
    {
      id: 3,
      title: "Non-invasive Application",
      description:
        "Our methods don't require breaking or damaging your structure, preserving its integrity while providing protection.",
      iconUrl: <Leaf size={18} color="#ffffff" aria-label="Non-invasive Application" />,
    },
    {
      id: 4,
      title: "Notary Warranty",
      description:
        "We provide a notary warranty of 5, 7, or 10 years, giving you peace of mind and confidence in our services.",
      iconUrl: <BookA size={18} color="#ffffff" aria-label="Notary Warranty" />,
    },
  ];

  return (
    <section id="about-us" className="w-full py-16 bg-neutral-100">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl text-[#1c1c1c] [font-family:'Poppins',Helvetica] mb-4 leading-9">
            Why Choose Us
          </h2>
          <p className="font-normal text-base text-[#4b4b4b] [font-family:'Poppins',Helvetica] leading-6 max-w-[594px] mx-auto">
            We deliver exceptional waterproofing solutions that stand the test
            of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="rounded-lg shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] border-0 cursor-pointer"
            >
              <CardContent className="p-6 flex">
                <div className="w-12 h-12 bg-[#f37021] rounded-full flex items-center justify-center shrink-0">
                  {/* <div
                    className="relative w-4 h-4 bg-[100%_100%]"
                    style={{ backgroundImage: `url(${feature.iconUrl})` }}
                  /> */}
                  {feature.iconUrl}
                </div>
                <div className="ml-6">
                  <h3 className="font-semibold text-xl text-[#1c1c1c] [font-family:'Poppins',Helvetica] leading-7">
                    {feature.title}
                  </h3>
                  <p className="font-normal text-base text-[#4b4b4b] [font-family:'Poppins',Helvetica] leading-6 mt-2">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
