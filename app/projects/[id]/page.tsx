import { motion } from 'framer-motion';
import ProjectCarousel from './ProjectCarousel';

const projects = {
  'ecommerce-platform': {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with advanced features and seamless user experience.',
    longDescription: 'This comprehensive e-commerce platform was developed to provide businesses with a powerful and flexible solution for online sales. The platform includes features such as real-time inventory management, secure payment processing, and advanced analytics.',
    date: 'March 2024',
    category: 'Web Development',
    images: [
      '/projects/ecommerce/1.jpg',
      '/projects/ecommerce/2.jpg',
      '/projects/ecommerce/3.jpg',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    client: 'Retail Solutions Inc.',
  },
  'mobile-banking': {
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly mobile banking application with real-time transactions.',
    longDescription: 'A cutting-edge mobile banking application that provides users with a secure and intuitive way to manage their finances. The app includes features like biometric authentication, real-time transaction notifications, and AI-powered financial insights.',
    date: 'February 2024',
    category: 'Mobile App',
    images: [
      '/projects/banking/1.jpg',
      '/projects/banking/2.jpg',
      '/projects/banking/3.jpg',
    ],
    technologies: ['React Native', 'Firebase', 'AWS', 'TensorFlow'],
    client: 'Global Bank',
  },
  // Add other projects here...
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Image Carousel */}
          <ProjectCarousel images={project.images} title={project.title} />

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
      </div>
    </div>
  );
} 