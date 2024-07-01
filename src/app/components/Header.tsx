import React from 'react';

const Header: React.FC = () => {
  return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Philipp Knoche</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href='#about'>About Me</a></li>
      <li><a href='#projects'>Projects</a></li>
      <li><a href='#resume'>Resume</a></li>      
    </ul>
  </div>
</div>
    // <header className='sticky top-0 z-50 mb-4 w-full bg-gray-900 p-6 text-white shadow-md'>
    //   <div className='container mx-auto flex items-center justify-between'>
    //     <h1 className='text-3xl font-bold'>Philipp Knoche</h1>
    //     <nav>
    //       <ul className='flex space-x-6'>
            // <li>
            //   <a className='btn' href='#about'>
            //     About Me
            //   </a>
    //         </li>
            // <li>
            //   <a className='btn' href='#projects'>
            //     Projects
            //   </a>
            // </li>
            // <li>
            //   <a className='btn' href='#resume'>
            //     Resume
            //   </a>
            // </li>
            // <li>
            //   <a className='btn' href='#footer'>
            //     Social
            //   </a>
            // </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
  );
};

export default Header;
