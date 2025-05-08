import ProjectCarousel from './ProjectCarousel';
import ProjectDetails from './ProjectDetails';

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

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        {/* Image Carousel */}
        <ProjectCarousel images={project.images} title={project.title} />
        
        {/* Project Details */}
        <ProjectDetails project={project} />
      </div>
    </div>
  );
} 