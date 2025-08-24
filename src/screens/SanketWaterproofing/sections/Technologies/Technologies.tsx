import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

import ImageTechnology from '../../../../images/technology/technology.jpeg';

import { ShieldHalf, Ban, PaintRoller, Building, Hourglass, Thermometer } from "lucide-react";

export const Technologies = (): JSX.Element => {
  // Feature data for the technology benefits
  const features = [
    {
      icon: <ShieldHalf size={18} color="#ffffff" aria-label="Prevents water from penetrating inside your structure" />,
      title: "Prevents water from penetrating inside your structure",
      description:
        "Once our treatment is done, water doesn’t stand a chance to penetrate inside your structure. It converts hydrophilic structure into hydrophobic structure.",
    },
    {
      icon: <Ban size={18} color="#ffffff" aria-label="No algae formation" />,
      title: "No algae formation",
      description:
        "Once our treatment is done, we ensure that algae isn’t formed on your treated surface, as algae is formed only where there is presence of water.",
    },
    {
      icon: <PaintRoller size={18} color="#ffffff" aria-label="Increase in lifespan of the paint"/>,
      title: "Increase in lifespan of the paint",
      description:
        "Due to non-ingress of water and better bonding capability of our chemical, the lifespan of the paint increases.",
    },
    {
      icon: <Building size={18} color="#ffffff" aria-label="Easy application, no breaking or hammering to your structure"/>,
      title: "Easy application, no breaking or hammering to your structure",
      description:
        "We believe in non-invasive treatment. We make sure your structure isn’t hammered or punctured in the process, which results in minimal damage and maximum results.",
    },
    {
      icon: <Hourglass size={18} color="#ffffff" aria-label="Minimum days to execute the work"/>,
      title: "Minimum days to execute the work",
      description: "Due to our expert labour and management, we take minimum time to deliver the results."
    },
    {
      icon: <Thermometer size={18} color="#ffffff" aria-label="Decrease in the temperature of the slab"/>,
      title: "Decrease in the temperature of the slab",
      description: "After our treatment, the temperature of your slab reduces up to 10⁰, which benefits you with reduction in electrical consumption of your air conditioners."
    }
  ];

  return (
    <section id="technology" className="w-full py-16 bg-neutral-100">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl leading-9 text-[#1c1c1c] font-['Poppins',Helvetica] mb-4">
            Our Penetrative Waterproofing Technology
          </h2>
          <p className="font-normal text-base leading-6 text-[#4b4b4b] font-['Poppins',Helvetica] max-w-2xl mx-auto">
            Our penetrative technology seals the pores of your structure,
            preventing water from entering and making it hydrophobic. This
            non-invasive method:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <Card className="flex-1 border-0 shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] rounded-lg overflow-hidden">
            <CardContent className="p-0 h-full">
              <div className="h-full w-full relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover "
                  aria-label="Waterproofing Technology"
                  title="Waterproofing Technology"
                  width="100%"
                  height="100%"
                  style={{ top: 0, left: 0 }}
                  src={ImageTechnology}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex-1 flex flex-col justify-center space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-[#f37021] rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="relative w-4 h-6">
                    <div className="flex w-4 h-4 items-center justify-center relative top-[3px]">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-['Poppins',Helvetica] font-semibold text-xl text-[#1c1c1c] leading-7 mb-1">
                    {feature.title}
                  </h3>
                  <p className="font-['Poppins',Helvetica] font-normal text-base text-[#4b4b4b] leading-6">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};