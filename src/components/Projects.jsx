import React from 'react';

const projects = [
  {
    name: "AutoDataSync",
    description: "C# + SSIS-based ETL system that maps and syncs JSON APIs into SQL Server.",
    link: "https://github.com/harrydinh/autodatasync"
  },
  {
    name: "Kremee Catering Portal",
    description: "React + Flask app to manage catering orders for an ice cream shop.",
    link: "https://github.com/harrydinh/kremee-catering"
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-4 md:px-20">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <a href={project.link} className="text-blue-400 mt-4 inline-block" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
