import React from 'react';

const Header: React.FC = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='pl-4 text-3xl font-bold'>Philipp Knoche</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a href='#about'>About Me</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#resume'>Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
