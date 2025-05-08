'use client';

import { motion } from 'framer-motion';

interface ProjectDetailsProps {
  project: {
    title: string;
    date: string;
    category: string;
    client: string;
    longDescription: string;
    technologies: string[];
  };
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto"
    >
      {/* Project Details */}
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {project.title}
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500">{project.date}</span>
              <span className="text-blue-600 font-medium">
                {project.category}
              </span>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <h3 className="text-sm font-medium text-gray-500">Client</h3>
            <p className="text-gray-900">{project.client}</p>
          </div>
        </div>

        <div className="prose max-w-none mb-8">
          <p className="text-gray-600 text-lg mb-6">
            {project.longDescription}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 