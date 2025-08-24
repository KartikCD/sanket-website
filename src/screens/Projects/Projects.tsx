import React, { useState } from "react";
import { ArrowLeft, Calendar, MapPin, Square, Star, User } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Modal } from "../../components/ui/modal";
import { HeaderSection } from "../SanketWaterproofing/sections/HeaderSection";
import { FooterSection } from "../SanketWaterproofing/sections/FooterSection";

interface Project {
  id: number;
  title: string;
  location: string;
  area: number;
  duration: number;
  status: "completed" | "ongoing" | "upcoming";
  image: string;
  description: string;
  clientReview: string;
  clientName: string;
  rating: number;
  completionDate?: string;
  startDate?: string;
  projectType: string;
  challenges: string[];
  solutions: string[];
}

export const Projects = (): JSX.Element => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<"completed" | "ongoing" | "upcoming">("completed");

  // Sample project data
  const projects: Project[] = [
    {
      id: 1,
      title: "Luxury Residential Complex - Phase 1",
      location: "Downtown Boston, MA",
      area: 15000,
      duration: 45,
      status: "completed",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Complete waterproofing solution for a 20-story luxury residential complex including terrace, basement, and exterior walls.",
      clientReview: "Exceptional work quality and timely completion. The team was professional and the waterproofing has held up perfectly through multiple seasons.",
      clientName: "John Mitchell",
      rating: 5,
      completionDate: "March 15, 2024",
      projectType: "Residential Complex",
      challenges: ["High-rise access", "Weather constraints", "Occupied building"],
      solutions: ["Advanced scaffolding system", "Weather-resistant materials", "Phased execution plan"]
    },
    {
      id: 2,
      title: "Commercial Office Building",
      location: "Cambridge, MA",
      area: 8500,
      duration: 30,
      status: "completed",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Comprehensive waterproofing for office building including parking garage and rooftop areas.",
      clientReview: "Outstanding service and attention to detail. No leakage issues since completion and the warranty gives us peace of mind.",
      clientName: "Sarah Johnson",
      rating: 5,
      completionDate: "January 20, 2024",
      projectType: "Commercial Building",
      challenges: ["Underground parking", "Business continuity", "Complex drainage"],
      solutions: ["Non-disruptive techniques", "After-hours work schedule", "Advanced drainage system"]
    },
    {
      id: 3,
      title: "Industrial Warehouse Complex",
      location: "Quincy, MA",
      area: 25000,
      duration: 60,
      status: "ongoing",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Large-scale waterproofing project for industrial warehouse including loading docks and storage areas.",
      clientReview: "Work in progress but very impressed with the professionalism and quality so far. Team is always on schedule.",
      clientName: "Mike Rodriguez",
      rating: 5,
      startDate: "February 1, 2024",
      projectType: "Industrial Complex",
      challenges: ["Large scale operations", "Heavy machinery access", "Continuous operations"],
      solutions: ["Sectional approach", "Specialized equipment", "24/7 coordination"]
    },
    {
      id: 4,
      title: "Hospital Medical Center",
      location: "Newton, MA",
      area: 12000,
      duration: 40,
      status: "ongoing",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Critical waterproofing for medical facility including operating rooms and patient areas.",
      clientReview: "Extremely careful and professional approach. Understanding of hospital requirements is excellent.",
      clientName: "Dr. Emily Chen",
      rating: 5,
      startDate: "March 10, 2024",
      projectType: "Healthcare Facility",
      challenges: ["Sterile environment", "Critical operations", "Strict regulations"],
      solutions: ["Medical-grade materials", "Infection control protocols", "Minimal disruption methods"]
    },
    {
      id: 5,
      title: "Shopping Mall Renovation",
      location: "Brookline, MA",
      area: 18000,
      duration: 50,
      status: "upcoming",
      image: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Complete waterproofing renovation for shopping mall including food court and retail spaces.",
      clientReview: "Looking forward to working with AquaShield based on their excellent reputation and detailed proposal.",
      clientName: "Robert Kim",
      rating: 0,
      startDate: "June 1, 2024",
      projectType: "Retail Complex",
      challenges: ["Public access", "Multiple tenants", "Aesthetic requirements"],
      solutions: ["Phased execution", "Tenant coordination", "Decorative finishes"]
    },
    {
      id: 6,
      title: "University Campus Buildings",
      location: "Cambridge, MA",
      area: 22000,
      duration: 70,
      status: "upcoming",
      image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Waterproofing solution for multiple university buildings including dormitories and academic facilities.",
      clientReview: "Excited to begin this project. The planning phase has been thorough and professional.",
      clientName: "Prof. David Wilson",
      rating: 0,
      startDate: "August 15, 2024",
      projectType: "Educational Facility",
      challenges: ["Multiple buildings", "Student housing", "Academic schedule"],
      solutions: ["Summer execution", "Building-by-building approach", "Student safety protocols"]
    }
  ];

  const filteredProjects = projects.filter(project => project.status === activeTab);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "ongoing":
        return "bg-blue-100 text-blue-800";
      case "upcoming":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "ongoing":
        return "In Progress";
      case "upcoming":
        return "Upcoming";
      default:
        return status;
    }
  };

  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <HeaderSection />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Back Button */}
          <div className="mb-12">
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="flex items-center gap-2 hover:bg-[#f37021] hover:text-white hover:border-[#f37021] transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </div>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-bold text-4xl text-[#1c1c1c] font-['Poppins',Helvetica] mb-6 leading-tight">
              Our Projects
            </h1>
            <p className="font-normal text-lg text-[#4b4b4b] font-['Poppins',Helvetica] max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive portfolio of waterproofing projects across various sectors
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex shadow-sm">
              {[
                { key: "completed", label: "Completed Projects", count: projects.filter(p => p.status === "completed").length },
                { key: "ongoing", label: "Ongoing Projects", count: projects.filter(p => p.status === "ongoing").length },
                { key: "upcoming", label: "Upcoming Projects", count: projects.filter(p => p.status === "upcoming").length }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-8 py-4 rounded-md font-medium font-['Poppins',Helvetica] transition-all duration-300 text-sm ${
                    activeTab === tab.key
                      ? "bg-[#f37021] text-white shadow-md transform scale-105"
                      : "text-[#4b4b4b] hover:text-[#1c1c1c] hover:bg-white"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden rounded-lg shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] bg-white transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {getStatusText(project.status)}
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="font-semibold text-xl text-[#1c1c1c] font-['Poppins',Helvetica] mb-2 group-hover:text-[#f37021] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-[#4b4b4b]">
                      <MapPin className="h-4 w-4 mr-2 text-[#f37021]" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-[#4b4b4b]">
                      <Square className="h-4 w-4 mr-2 text-[#f37021]" />
                      {project.area.toLocaleString()} sq ft
                    </div>
                    <div className="flex items-center text-sm text-[#4b4b4b]">
                      <Calendar className="h-4 w-4 mr-2 text-[#f37021]" />
                      {project.duration} days
                    </div>
                  </div>
                  <p className="text-sm text-[#4b4b4b] font-['Poppins',Helvetica] line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-[#4b4b4b] font-['Poppins',Helvetica]">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </main>

      <FooterSection />

      {/* Project Details Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={closeProjectModal}
          title={selectedProject.title}
        >
          <div className="space-y-6">
            {/* Project Image */}
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-xl text-[#1c1c1c] font-['Poppins',Helvetica] border-b border-gray-200 pb-2">
                  Project Details
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-3 text-[#f37021]" />
                    <span className="text-base text-[#4b4b4b]">{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-3 text-[#f37021]" />
                    <span className="text-base text-[#4b4b4b]">{selectedProject.area.toLocaleString()} sq ft</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-3 text-[#f37021]" />
                    <span className="text-base text-[#4b4b4b]">{selectedProject.duration} days</span>
                  </div>
                  <div className="flex items-center">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedProject.status)}`}>
                      {getStatusText(selectedProject.status)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-xl text-[#1c1c1c] font-['Poppins',Helvetica] border-b border-gray-200 pb-2">
                  Project Information
                </h4>
                <div className="space-y-4">
                  <div>
                    <span className="text-base font-medium text-[#1c1c1c]">Type: </span>
                    <span className="text-base text-[#4b4b4b]">{selectedProject.projectType}</span>
                  </div>
                  {selectedProject.completionDate && (
                    <div>
                      <span className="text-base font-medium text-[#1c1c1c]">Completed: </span>
                      <span className="text-base text-[#4b4b4b]">{selectedProject.completionDate}</span>
                    </div>
                  )}
                  {selectedProject.startDate && (
                    <div>
                      <span className="text-base font-medium text-[#1c1c1c]">Started: </span>
                      <span className="text-base text-[#4b4b4b]">{selectedProject.startDate}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="font-semibold text-xl text-[#1c1c1c] font-['Poppins',Helvetica] mb-4 border-b border-gray-200 pb-2">
                Project Description
              </h4>
              <p className="text-base text-[#4b4b4b] leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Challenges and Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-xl text-[#1c1c1c] font-['Poppins',Helvetica] mb-4 border-b border-gray-200 pb-2">
                  Challenges
                </h4>
                <ul className="space-y-2">
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index} className="text-base text-[#4b4b4b] flex items-start">
                      <span className="w-2 h-2 bg-[#f37021] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-xl text-[#1c1c1c] font-['Poppins',Helvetica] mb-4 border-b border-gray-200 pb-2">
                  Solutions
                </h4>
                <ul className="space-y-2">
                  {selectedProject.solutions.map((solution, index) => (
                    <li key={index} className="text-base text-[#4b4b4b] flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Client Review */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-xl text-[#1c1c1c] font-['Poppins',Helvetica] mb-4 border-b border-gray-200 pb-2">
                Client Review
              </h4>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#f37021] rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="font-medium text-[#1c1c1c] mr-3">{selectedProject.clientName}</span>
                    {selectedProject.rating > 0 && (
                      <div className="flex">
                        {[...Array(selectedProject.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-base text-[#4b4b4b] italic leading-relaxed">
                    "{selectedProject.clientReview}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};