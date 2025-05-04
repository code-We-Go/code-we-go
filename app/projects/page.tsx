'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with advanced features and seamless user experience.',
    image: '/projects/ecommerce.jpg',
    date: 'March 2024',
    category: 'Web Development',
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly mobile banking application with real-time transactions.',
    image: '/projects/banking.jpg',
    date: 'February 2024',
    category: 'Mobile App',
  },
  {
    id: 'corporate-website',
    title: 'Corporate Website',
    description: 'A responsive corporate website with modern design and interactive elements.',
    image: '/projects/corporate.jpg',
    date: 'January 2024',
    category: 'Web Development',
  },
  {
    id: 'healthcare-system',
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare management solution for hospitals and clinics.',
    image: '/projects/healthcare.jpg',
    date: 'December 2023',
    category: 'Enterprise Software',
  },
  {
    id: 'fitness-app',
    title: 'Fitness Tracking App',
    description: 'Personalized fitness tracking and workout planning application.',
    image: '/projects/fitness.jpg',
    date: 'November 2023',
    category: 'Mobile App',
  },
  {
    id: 'education-platform',
    title: 'Online Education Platform',
    description: 'Interactive learning platform with video courses and assessments.',
    image: '/projects/education.jpg',
    date: 'October 2023',
    category: 'Web Development',
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h2>
                    <span className="text-sm text-gray-500">{project.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 