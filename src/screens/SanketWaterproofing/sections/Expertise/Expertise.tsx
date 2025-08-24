import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

import ImageTerrace from '../../../../images/expertise/terrace.svg';
import ImageDeadWalls from '../../../../images/expertise/dead-walls.svg';
import ImageParapetWalls from '../../../../images/expertise/parapet-walls.svg';
import ImagePodiums from '../../../../images/expertise/podiums.svg';
import ImageSunkenLabs from '../../../../images/expertise/sunken-labs.svg';
import ImageOverheadTanks from '../../../../images/expertise/overheadtanks.png';
import { Modal } from "../../../../components/ui/modal";

interface Description {
  id: number;
  title: string;
  description: string;
}

interface ExpertiseDescription extends Description {
  importance: Array<Description>;
}

export const expertiseDescription: Array<ExpertiseDescription> = [
  {
    id: 2,
    title: "Sunken Slab",
    description: "Sunken slab waterproofing is crucial in building construction, especially in wet areas like bathrooms, toilets, kitchens, and balconies. These slabs are deliberately lowered below the floor level to allow space for plumbing and drainage systems. Without proper waterproofing, sunken slabs can lead to serious structural and hygiene issues.",
    importance: [
      {
        id: 1,
        title: "Prevents Water Leakage and Seepage",
        description: "Water can seep through joints and cracks, damaging the slab and adjacent rooms (especially ceilings of rooms below). Prevents water from leaking into lower floors, protecting ceilings and interiors from stains and mold."
      },
      {
        id: 2,
        title: "Protects Structural Integrity",
        description: "Constant exposure to water can weaken the concrete, corrode reinforcement bars (rebar), and cause long-term structural damage. Helps avoid expensive structural repairs in the future."
      },
      {
        id: 3,
        title: "Prevents Mold and Mildew Growth",
        description: "Wet areas with poor waterproofing become breeding grounds for mold, which poses health risks and damages materials like paint, tiles, and wood."
      },
      {
        id: 4,
        title: "Ensures Hygiene and Indoor Air Quality",
        description: "Leaks and moisture can cause foul smells, bacteria buildup, and poor air quality in living spaces."
      },
      {
        id: 5,
        title: "Increases Lifespan of Finishes",
        description: "Tiles, flooring, paints, and other surface finishes degrade faster if the slab is not waterproofed."
      },
      {
        id: 6,
        title: "⁠Enhances Property Value",
        description: "Well-executed waterproofing indicates good construction quality, reassuring buyers or tenants and increasing resale value."
      }
    ]
  },
  {
    id: 3,
    title: "Podium Slab",
    description: `Podium slab waterproofing is critically important in modern construction, especially in high-rise buildings, commercial complexes, and residential societies. The podium slab is typically located above the basement or lower floors and supports outdoor areas like gardens, parking zones, driveways, swimming pools, play areas, or even landscaped terraces.{'\n'}Because it sits above occupied or usable spaces, waterproofing a podium slab is non-negotiable to prevent major structural and functional problems`,
    importance: [
      {
        id: 1,
        title: "Prevents Water Ingress into Basements or Interiors",
        description: "Podium slabs are directly exposed to rain, irrigation, or water from pools. If not waterproofed, water penetrates the slab and seeps into the structure below (e.g., basements, parking, lobbies). Prevents damage to interior finishes, lighting, electricals, and stored items."
      },
      {
        id: 2,
        title: "Protects Structural Integrity",
        description: "Water infiltration can lead to concrete deterioration and corrosion of reinforcement (rebar), weakening the slab over time. Continuous water exposure can cause cracks, spalling, and ultimately compromise the building’s safety."
      },
      {
        id: 3,
        title: "Prevents Mold, Dampness, and Foul Odors",
        description: "Moisture ingress leads to humidity, mold growth, and musty smells in the spaces below, making them unhygienic and uncomfortable."
      },
      {
        id: 4,
        title: "⁠Reduces Maintenance and Repair Costs",
        description: "Fixing waterproofing after construction is much more expensive and disruptive than doing it right during construction. Saves long-term costs in repairs, repainting, and structural reinforcement."
      },
      {
        id: 5,
        title: "⁠Protects Finishes and Landscaping",
        description: "Tiles, planters, concrete pavers, and green spaces above the podium last longer when water doesn’t penetrate through. Prevents root intrusion from landscaping into the slab, which can cause cracks and leakage."
      },
      {
        id: 6,
        title: "Ensures Usability and Safety",
        description: "Leaky podiums cause water pooling, slippery surfaces, and can make recreational or parking areas unusable during rains."
      }
    ]
  },
  {
    id: 4,
    title: "Dead Walls",
    description: `A dead wall is the external wall of a building that is usually not visible or has no openings (like windows/doors). It is often in direct contact with adjoining structures, soil, or exposed weather. Because it is not frequently accessed or noticed, its maintenance is often neglected.`,
    importance: [
      {
        id: 1,
        title: "Prevents Seepage & Dampness",
        description: "Dead walls are prone to rainwater absorption and groundwater seepage. Without waterproofing, moisture travels inside and damages plaster, paint, and interiors."
      },
      {
        id: 2,
        title: "Protects Structural Integrity",
        description: "Continuous water penetration weakens bricks, blockwork, and RCC. Prevents cracks, efflorescence (white salt deposits), and spalling (peeling concrete)."
      },
      {
        id: 3,
        title: "Avoids Health Hazards",
        description: "Damp walls create a breeding ground for mold, mildew, and bacteria. Prevents foul odour, allergies, and respiratory issues for occupants."
      },
      {
        id: 4,
        title: "Energy Efficiency",
        description: "Wet walls reduce thermal insulation. Proper waterproofing keeps interiors cooler in summer and warmer in winter, lowering energy bills."
      },
      {
        id: 5,
        title: "Cost Savings in the Long Run",
        description: "Fixing seepage after damage is far more expensive. Preventive waterproofing ensures long-term durability and lower maintenance costs."
      },
      {
        id: 6,
        title: "Preserves Aesthetics",
        description: "Prevents wall paint from peeling, discoloration, and patchy damp marks. Keeps both exterior and interior walls looking clean and fresh."
      }
    ]
  },
  {
    id: 5,
    title: "Parapet Walls",
    description: `A parapet wall is the low protective wall along the edge of a terrace, balcony, or roof. Since it is directly exposed to rain, sun, and wind, it is one of the most vulnerable parts of a building to water damage.`,
    importance: [
      {
        id: 1,
        title: "Prevents Water Seepage",
        description: "Parapet walls absorb rainwater, which seeps into the roof slab and interior walls. Proper waterproofing blocks this entry point."
      },
      {
        id: 2,
        title: "Protects Roof Slab & Interiors",
        description: "Seepage from parapet walls often spreads to the terrace slab, leading to cracks and leakage inside rooms."
      },
      {
        id: 3,
        title: "Stops Plaster Damage & Cracks",
        description: "Without treatment, continuous moisture causes plaster to peel, efflorescence (white patches), and wall deterioration."
      },
      {
        id: 4,
        title: "Increases Structural Life",
        description: "Reduces risk of reinforcement corrosion and concrete weakening. Keeps the building stronger for a longer time."
      },
      {
        id: 5,
        title: "Avoids Health Hazards",
        description: "Damp patches encourage mold, algae, and fungal growth, leading to unhealthy indoor air."
      },
      {
        id: 6,
        title: "Improves Aesthetics",
        description: "Waterproofing prevents ugly damp marks, peeling paint, and stains on exterior walls."
      },
      {
        id: 7,
        title: "Cost-Effective Maintenance",
        description: "Prevents recurring terrace leakage problems. Saves expensive repair costs in the long term."
      }
    ]
  },
  {
    id: 6,
    title: "Overhead Tanks",
    description: `An overhead tank is a water storage structure built on the terrace or rooftop of a building. Since it stores large volumes of water continuously, even the smallest crack or leakage can cause serious structural and health issues.`,
    importance: [
      {
        id: 1,
        title: "Prevents Water Leakage & Seepage",
        description: "Continuous water storage causes hydrostatic pressure. Proper waterproofing ensures no leakage through cracks or joints."
      },
      {
        id: 2,
        title: "Protects Structural Integrity",
        description: "Seepage weakens RCC, corrodes reinforcement steel, and reduces the tank’s lifespan. Prevents structural hazards in the long run."
      },
      {
        id: 3,
        title: "Ensures Hygienic Water Storage",
        description: "Leaks allow entry of dust, algae, and bacteria. Waterproofing maintains clean, safe, and potable water for daily use."
      },
      {
        id: 4,
        title: "Avoids Dampness in Building",
        description: "Leakage from overhead tanks leads to seepage into roof slabs and walls below, creating damp patches in rooms."
      },
      {
        id: 5,
        title: "Saves Maintenance & Repair Costs",
        description: "Early waterproofing avoids frequent patch repairs and costly structural restoration."
      },
      {
        id: 6,
        title: "Enhances Durability",
        description: "Properly treated tanks withstand weather changes, thermal expansion, and constant water pressure."
      },
      {
        id: 7,
        title: "Maintains Aesthetics of Building",
        description: "Prevents water stains, cracks, and moss growth on exterior walls caused by seepage from tanks."
      }
    ]
  }
]

const expertiseCards = [
    {
      id: 1,
      title: "Terrace",
      description:
        "Comprehensive waterproofing solutions for terraces to prevent leakage and water damage.",
      backgroundImage: ImageTerrace,
    },
    {
      id: 2,
      title: "Sunken Slab",
      description:
        "Sunken slab waterproofing is crucial in building construction, especially in wet areas like bathrooms, toilets, kitchens, and balconies. These slabs are deliberately lowered below the floor level to allow space for plumbing and drainage systems. Without proper waterproofing, sunken slabs can lead to serious structural and hygiene issues.",
      backgroundImage: ImageSunkenLabs,
    },
    {
      id: 3,
      title: "Podium Slab",
      description:
        "Podium slab waterproofing is critically important in modern construction, especially in high-rise buildings, commercial complexes, and residential societies. The podium slab is typically located above the basement or lower floors and supports outdoor areas like gardens, parking zones, driveways, swimming pools, play areas, or even landscaped terraces.{'\n'}Because it sits above occupied or usable spaces, waterproofing a podium slab is non-negotiable to prevent major structural and functional problems",
      backgroundImage: ImagePodiums,
    },
    {
      id: 4,
      title: "Dead Walls",
      description:
        "A dead wall is the external wall of a building that is usually not visible or has no openings (like windows/doors). It is often in direct contact with adjoining structures, soil, or exposed weather. Because it is not frequently accessed or noticed, its maintenance is often neglected.",
      backgroundImage: ImageDeadWalls,
    },
    {
      id: 5,
      title: "Parapet Walls",
      description:
        "A parapet wall is the low protective wall along the edge of a terrace, balcony, or roof. Since it is directly exposed to rain, sun, and wind, it is one of the most vulnerable parts of a building to water damage.",
      backgroundImage: ImageParapetWalls,
    },
    {
      id: 6,
      title: "Overhead Tanks",
      description:
        "An overhead tank is a water storage structure built on the terrace or rooftop of a building. Since it stores large volumes of water continuously, even the smallest crack or leakage can cause serious structural and health issues.",
      backgroundImage: ImageOverheadTanks,
    },
  ];

export const Expertise = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState<ExpertiseDescription | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const onReadmoreClick = (index: number) => {
    const importanceItem = expertiseDescription?.find(i => i.id === index) ?? null;
    setContent(importanceItem);
    openModal();
  }
  // Data for expertise cards

  return (
    <section id="services" className="w-full py-16 bg-white">
      <div className="container mx-auto max-w-[1280px] px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 transform transition-all duration-700 hover:translate-y-[-4px]">
          <h2 className="font-bold text-3xl text-[#1c1c1c] [font-family:'Poppins',Helvetica] mb-4 leading-9 transition-colors duration-300 hover:text-[#f37021]">
            Our Expertise
          </h2>
          <p className="text-base text-[#4b4b4b] text-center max-w-[745px] [font-family:'Poppins',Helvetica] leading-6 transition-colors duration-300 hover:text-[#1c1c1c]">
            We provide comprehensive waterproofing solutions for all types of
            structures, ensuring long- lasting protection against water damage.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseCards.map((card, index) => (
            <Card
              key={card.id}
              className="overflow-hidden rounded-lg shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] bg-neutral-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 transform cursor-pointer group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => onReadmoreClick(card.id)}
            >
              <div
                className="relative h-48 w-full transition-all duration-500 group-hover:scale-110"
              >
                <img
                  className={`absolute inset-0 w-full h-full ${index === 5 ? "object-fill" : "object-cover"}`}
                  src={card.backgroundImage}
                  aria-label={`${card.title} Expertise`}
                  title={`${card.title} Expertise`}
                  width="100%"
                  height="100%"
                />
              </div>
              <CardContent className="p-6 transition-all duration-300 group-hover:bg-white">
                <h3 className="font-semibold text-xl text-[#1c1c1c] [font-family:'Poppins',Helvetica] mb-3 leading-7 transition-colors duration-300 group-hover:text-[#f37021]">
                  {card.title}
                </h3>
                <p className="text-base text-[#4b4b4b] [font-family:'Poppins',Helvetica] leading-6 transition-colors duration-300 group-hover:text-[#1c1c1c] line-clamp-3">
                  {card.description}
                </p>
                <div>
                  <p className="text-sm text-[#f37021] mt-2 font-medium cursor-pointer">
                    Read More
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {content && (
        <Modal isOpen={isModalOpen} onClose={closeModal} title={content.title}>
          <div className="space-y-6">
            <div>
              <p className="text-base text-[#4b4b4b] leading-relaxed">
                {content.description}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-xl text-[#1c1c1c] font-['Poppins',Helvetica] mb-4 border-b border-gray-200 pb-2">
                Why {content.title} Waterproofing is important?
              </h4>
              <ul className="space-y-2">
                {content.importance.map((desc, index) => (
                  <li key={index} className="text-base text-[#4b4b4b] flex items-start">
                    <span className="w-2 h-2 bg-[#f37021] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }}>
                      <span style={{ fontWeight: 'bold' }}>{desc.title}</span>
                      <span>{desc.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      )}

    </section>
  );
};
