import React from 'react';

const skills = ["Python", "SQL", "SSIS", "Azure", "React", "Power BI", "Git"];

export default function Skills() {
  return (
    <section className="py-20 px-4 md:px-20 bg-gray-800">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-700 px-4 py-2 rounded text-white">{skill}</span>
        ))}
      </div>
    </section>
  );
}
