import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// Placeholder project data
const projects = [
  {
    id: 1,
    title: "Commercial Complex Waterproofing",
    description: "Comprehensive terrace and basement waterproofing for a multi-story commercial building.",
    imageUrl: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Residential Tower Structural Repair",
    description: "Structural strengthening and concrete repair for a high-rise residential apartment complex.",
    imageUrl: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Industrial Plant Rehabilitation",
    description: "Epoxy flooring and protective coatings for a manufacturing plant to prevent chemical corrosion.",
    imageUrl: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const Projects = (): JSX.Element => {
  const pageUrl = "https://www.keshaventerprises.com/projects";
  const title = "Our Projects - Keshav Enterprises Waterproofing";
  const description = "Explore our portfolio of successful waterproofing, structural repair, and rehabilitation projects. See the quality and durability of our work.";
  const imageUrl = "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
      <div className="bg-gray-50 min-h-screen">
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Keshav Enterprises</h1>
            <Link to="/" className="text-purple-600 hover:text-purple-800 transition-colors">
              &larr; Back to Home
            </Link>
          </nav>
        </header>
        <main className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Our Portfolio</h2>
            <p className="text-lg text-gray-600 mt-2">A showcase of our expertise and commitment to quality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};
