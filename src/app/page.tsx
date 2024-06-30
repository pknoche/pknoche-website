import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import UnderConstruction from './components/UnderConstruction';
import './globals.css';

const Home: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <UnderConstruction />
      <Header />
      <main className='container mx-auto flex-grow space-y-8 p-4'>
        <About />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
