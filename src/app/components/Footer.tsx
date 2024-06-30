import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      id='footer'
      className='w-full bg-gray-900 py-6 text-center text-white shadow-md'
    >
      <div className='container mx-auto'>
        <div className='flex justify-center space-x-4'>
          <a
            href='https://www.linkedin.com/in/pknoche'
            className='btn flex items-center space-x-2'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.67c-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07 0 1.14-.93 2.07-2.07 2.07zM20.45 20.45h-3.56v-5.64c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.74h-3.56V9h3.42v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.63 0 4.3 2.39 4.3 5.49v6.26z' />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href='https://www.github.com/pknoche'
            className='btn flex items-center space-x-2'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.79 8.207 11.387.599.111.793-.261.793-.577 0-.285-.011-1.041-.017-2.045-3.338.726-4.042-1.614-4.042-1.614-.545-1.384-1.333-1.754-1.333-1.754-1.09-.745.082-.73.082-.73 1.204.084 1.837 1.236 1.837 1.236 1.07 1.834 2.806 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.932 0-1.31.469-2.381 1.237-3.22-.125-.303-.536-1.526.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.403 1.02.004 2.047.137 3.006.403 2.291-1.552 3.296-1.23 3.296-1.23.654 1.65.243 2.873.119 3.176.77.839 1.236 1.91 1.236 3.22 0 4.61-2.804 5.624-5.476 5.92.43.371.814 1.103.814 2.222 0 1.604-.014 2.898-.014 3.292 0 .318.192.694.801.576C20.565 21.79 24 17.3 24 12 24 5.37 18.63 0 12 0z' />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
