import React from 'react';
import Image from 'next/image';

const projectData = [
  {
    src: '/portfolio-website.jpg',
    alt: 'briefcase',
    title: 'Portfolio Website',
    description:
      'Implemented with React and Next.js, this website is hosted on AWS and serves as a platform to showcase my portfolio and try out new technologies and projects.',
    url: 'https://github.com/pknoche/pknoche-website',
  },
  {
    src: '/employee-attrition-predictor.png',
    alt: 'employee attrition prediction system screenshot',
    title: 'Employee Attrition Prediction System',
    description:
      'Implemented with Jupyter Notebook and Python, this project uses machine learning to predict employee attrition based on various factors.',
    url: 'https://github.com/pknoche/employee-attrition-predictor',
  },
  {
    src: '/package-routing-program.jpg',
    alt: 'packages on truck',
    title: 'Package Routing Program',
    description:
      'Implemented with Python, this program simulates a package routing system for a delivery company. It uses a number of heuristic algorithms to determine the most efficient delivery routes and recommends package loading order.',
    url: 'https://github.com/pknoche/package-routing-program',
  },
  {
    src: '/appointment-manager.jpg',
    alt: 'calendar',
    title: 'Appointment Manager',
    description:
      'Implemented with Java and JavaFX, this program allows users to schedule appointments, manage customer contact information, and generate reports. It uses a MySQL database to store appointment and customer information.',
    url: 'https://github.com/pknoche/appointment-manager',
  },
  {
    src: '/inventory-management-system.jpg',
    alt: 'items on shelf in warehouse',
    title: 'Inventory Management System',
    description:
      'Implemented with Java and JavaFX, this program allows users to add and delete inventory, assign parts to products, and search for parts and products.',
    url: 'https://github.com/pknoche/inventory-management-system',
  },
  {
    src: '/student-roster-program.jpg',
    alt: 'stack of books',
    title: 'Student Roster Program',
    description:
      'Implemented with C++, this program parses student data from a csv file and allows users to add, delete, and search for students and generate reports.',
    url: 'https://github.com/pknoche/student-roster-program',
  },
];

const Projects: React.FC = () => {
  return (
    <section id='projects' className='mb-8'>
      <h2>Projects</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {projectData.map((project, index) => (
          <div key={index} className='card bg-base-100 shadow-xl'>
            <figure className='flex h-48 items-center justify-center overflow-hidden'>
              <Image
                src={project.src}
                alt={project.alt}
                width={500}
                height={300}
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{project.title}</h2>
              <p>{project.description}</p>
              <div className='card-actions justify-end'>
                <a
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn bg-gray-700 text-white'
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
