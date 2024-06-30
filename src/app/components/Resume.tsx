import React from 'react';

const Resume: React.FC = () => {
  return (
    <section id='resume' className='mb-8'>
      <h2 className='mb-8'>Resume</h2>
      <div className='rounded bg-white p-4 shadow-md'>
        <iframe
          src='https://pknoche-website.s3.amazonaws.com/documents/Philipp_Knoche_resume.pdf'
          className='h-[1125px] w-full'
          title='Resume'
        />
      </div>
    </section>
  );
};

export default Resume;
