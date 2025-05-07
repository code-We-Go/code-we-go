'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with advanced features and seamless user experience.',
    image: '/project1.jpg',
    link: '#',
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly mobile banking application with real-time transactions.',
    image: '/project2.jpg',
    link: '#',
  },
  {
    title: 'Corporate Website',
    description: 'A responsive corporate website with modern design and interactive elements.',
    image: '/project3.jpg',
    link: '#',
  },
];

const LatestProjects = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our recent work and see how we&apos;ve helped businesses achieve their digital goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Project <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProjects; 