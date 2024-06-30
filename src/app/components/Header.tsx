import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-6 shadow-md w-full mb-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Philipp Knoche</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a className="btn" href="#about">About Me</a></li>
            <li><a className="btn" href="#projects">Projects</a></li>
            <li><a className="btn" href="#resume">Resume</a></li>
            <li><a className="btn" href="#footer">Social</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
