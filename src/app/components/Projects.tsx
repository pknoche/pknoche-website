import React from 'react';
import Image from 'next/image';

const projectData = [
  {
    src: '/placeholder_image.jpg',
    alt: 'Placeholder Image 1',
    title: 'Project Title 1',
    description: 'This is a placeholder description for project 1.',
    url: 'https://www.github.com/pknoche/',
  },
  {
    src: '/placeholder_image.jpg',
    alt: 'Placeholder Image 2',
    title: 'Project Title 2',
    description: 'This is a placeholder description for project 2.',
    url: 'https://www.github.com/pknoche/',
  },
  {
    src: '/placeholder_image.jpg',
    alt: 'Placeholder Image 3',
    title: 'Project Title 3',
    description: 'This is a placeholder description for project 3.',
    url: 'https://www.github.com/pknoche/',
  },
  {
    src: '/placeholder_image.jpg',
    alt: 'Placeholder Image 4',
    title: 'Project Title 4',
    description: 'This is a placeholder description for project 4.',
    url: 'https://www.github.com/pknoche/',
  },
  {
    src: '/placeholder_image.jpg',
    alt: 'Placeholder Image 5',
    title: 'Project Title 5',
    description: 'This is a placeholder description for project 5.',
    url: 'https://www.github.com/pknoche/',
  },
  {
    src: '/placeholder_image.jpg',
    alt: 'Placeholder Image 6',
    title: 'Project Title 6',
    description: 'This is a placeholder description for project 6.',
    url: 'https://www.github.com/pknoche/',
  },
];

const Projects: React.FC = () => {
  return (
    <section id='projects' className='mb-8'>
      <h2>Projects</h2>
      <div className='grid grid-cols-3 gap-4'>
        {projectData.map((project, index) => (
          <div key={index} className='card bg-base-100 shadow-xl'>
            <figure>
              <Image
                src={project.src}
                alt={project.alt}
                width={500}
                height={300}
                layout='responsive'
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
                  GitHub
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
