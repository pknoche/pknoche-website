import React from 'react';

const About: React.FC = () => {
  return (
    <section id='about' className='mb-8'>
      <h2>About Me</h2>
      <div className='text-justify'>
        <p>
          I am a recent computer science graduate transitioning from a career in
          operations management to software development. Prior to returning to
          school full-time in 2022, I worked in operations management with
          Amazon for five years. After having the opportunity to work with
          software engineers on several projects, I became fascinated with the
          process of developing software and decided to make a change.
        </p>
        <p>
          I am currently seeking a full-time software development position where
          I can continue to learn and grow as a developer. I am most interested
          in full-stack development, but I am open to exploring other areas
          within the field as well.
        </p>
        <p>
          This website is intended to showcase my portfolio and to provide a
          platform where I can try out new technologies and projects. It is
          built primarily with React, Next.js, and TypeScript, and hosted on
          AWS.
        </p>
        <p>
          If you would like to get in touch, please contact me through{' '}
          <a
            href='https://www.linkedin.com/in/pknoche/'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            LinkedIn.
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
