'use client';

import { motion } from 'framer-motion';
import { FaCode, FaSearch, FaPalette, FaMobile } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications and websites built with modern technologies and best practices.',
    icon: <FaCode className="text-4xl text-blue-600" />,
  },
  {
    title: 'SEO',
    description: 'Comprehensive SEO strategies to improve your online visibility and drive organic traffic.',
    icon: <FaSearch className="text-4xl text-blue-600" />,
  },
  {
    title: 'Graphic Design',
    description: 'Stunning visual designs that capture your brand identity and engage your audience.',
    icon: <FaPalette className="text-4xl text-blue-600" />,
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    icon: <FaMobile className="text-4xl text-blue-600" />,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed in the digital world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 