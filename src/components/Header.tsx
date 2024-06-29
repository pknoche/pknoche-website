import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 text-center">
      <h1>Philipp Knoche</h1>
      <nav>
        <ul className="list-none p-0">
          <li className="inline m-4"><a className="text-white no-underline" href="#about">About Me</a></li>
          <li className="inline m-4"><a className="text-white no-underline" href="#projects">Projects</a></li>
          <li className="inline m-4"><a className="text-white no-underline" href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
