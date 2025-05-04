'use client';

import { motion } from 'framer-motion';
import { FaCheck, FaUsers, FaLightbulb, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    title: 'Expert Team',
    description: 'Our team consists of highly skilled professionals with years of industry experience.',
    icon: <FaUsers className="text-4xl text-blue-600" />,
  },
  {
    title: 'Innovative Solutions',
    description: 'We stay ahead of the curve with cutting-edge technologies and creative approaches.',
    icon: <FaLightbulb className="text-4xl text-blue-600" />,
  },
  {
    title: 'Proven Results',
    description: 'We deliver measurable results and help businesses achieve their goals.',
    icon: <FaChartLine className="text-4xl text-blue-600" />,
  },
  {
    title: 'Secure & Reliable',
    description: 'We prioritize security and reliability in all our solutions.',
    icon: <FaShieldAlt className="text-4xl text-blue-600" />,
  },
];

const WhyChooseUs = () => {
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
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We stand out from the competition with our unique approach and commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Commitment
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-600">
                Quality assurance at every stage of development
              </span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-600">
                Transparent communication and regular updates
              </span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-600">
                Dedicated support and maintenance services
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 