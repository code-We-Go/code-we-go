'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/about-image.jpg"
              alt="Our team working together"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Our Company
            </h2>
            <p className="text-lg text-gray-600">
              We are a team of passionate developers, designers, and digital strategists dedicated to creating exceptional software solutions. With years of experience in the industry, we combine technical expertise with creative thinking to deliver outstanding results for our clients.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to help businesses thrive in the digital age by providing innovative, scalable, and user-friendly software solutions that drive growth and efficiency.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-600">100+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-600">50+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 