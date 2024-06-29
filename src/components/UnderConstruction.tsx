import React from 'react';

const UnderConstruction: React.FC = () => {
  return (
    <>
      <div className="bg-yellow-400 text-gray-800 text-center p-4 text-xl fixed w-full top-0 z-50">
        <p className="m-0">🚧 This site is under construction. Stay tuned for updates! 🚧</p>
      </div>
      <div className="mt-16"></div>
    </>
  );
};

export default UnderConstruction;