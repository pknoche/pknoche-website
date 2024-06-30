import React from 'react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="mb-8">
      <h2 className="mb-8">Resume</h2>
      <div className="bg-white p-4 rounded shadow-md">
        <iframe
          src="https://pknoche-website.s3.amazonaws.com/documents/Philipp_Knoche_resume.pdf"
          className="w-full h-[1125px]"
          title="Resume"
        />
      </div>
    </section>
  );
};

export default Resume;