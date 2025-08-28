import React, { useState } from "react";
import { ArrowLeft, Calendar, MapPin, Square, Star, User } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Modal } from "../../components/ui/modal";
import { HeaderSection } from "../SanketWaterproofing/sections/HeaderSection";
import { FooterSection } from "../SanketWaterproofing/sections/FooterSection";
import { projects } from "../../util/projects";
import { useNavigate } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  location: string;
  area: string;
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
  bgColor?: string;
}

export const Projects = (): JSX.Element => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<"completed" | "ongoing" | "upcoming">("completed");
  const navigate = useNavigate();

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
              onClick={() => navigate("/")}
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
                  {tab.label}
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
                // onClick={() => openProjectModal(project)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ backgroundColor: project.bgColor || "" }}
                    className={`w-full h-48 object-cover transition-all duration-300 group-hover:scale-110`}
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
                      {project.area} sq ft
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
            {filteredProjects.length > 0 && (
              <Card
                className="overflow-hidden rounded-lg shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] bg-white transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center text-center"
              >
                <CardContent className="p-6 flex flex-col items-center justify-center">
                  <h3 className="font-semibold text-xl text-[#1c1c1c] font-['Poppins',Helvetica] mb-4 transition-colors duration-300">
                    And Many More...
                  </h3>
                  <p className="text-sm text-[#4b4b4b] font-['Poppins',Helvetica] leading-relaxed mb-6">
                    Our proven waterproofing work is expanding—let’s add your project next.
                  </p>
                  <Button
                    onClick={() => navigate('/#contact-us')}
                    className="bg-[#f37021] hover:bg-[#e05e10] text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Get in Touch
                  </Button>
                </CardContent>
              </Card>
            )}
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
                    <span className="text-base text-[#4b4b4b]">{selectedProject.area} sq ft</span>
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
