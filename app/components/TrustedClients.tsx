'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const clients = [
  { name: 'Microsoft', logo: '/clients/microsoft.png' },
  { name: 'Google', logo: '/clients/google.png' },
  { name: 'Amazon', logo: '/clients/amazon.png' },
  { name: 'Apple', logo: '/clients/apple.png' },
  { name: 'Meta', logo: '/clients/meta.png' },
  { name: 'Netflix', logo: '/clients/netflix.png' },
  // Duplicate clients for seamless loop
  { name: 'Microsoft', logo: '/clients/microsoft.png' },
  { name: 'Google', logo: '/clients/google.png' },
  { name: 'Amazon', logo: '/clients/amazon.png' },
  { name: 'Apple', logo: '/clients/apple.png' },
  { name: 'Meta', logo: '/clients/meta.png' },
  { name: 'Netflix', logo: '/clients/netflix.png' },
];

const TrustedClients = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const totalWidth = containerWidth * 2;

    const animate = async () => {
      await controls.start({
        x: -totalWidth / 2,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    animate();
  }, [controls]);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re proud to work with some of the world&apos;s most innovative companies
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          <motion.div
            animate={controls}
            className="flex space-x-8"
          >
            {clients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 bg-white p-6 rounded-xl shadow-sm flex items-center justify-center"
              >
                <div className="relative w-32 h-16">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients; 