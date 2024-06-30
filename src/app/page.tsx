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
    <div className="flex flex-col min-h-screen">
      <UnderConstruction />
      <Header />
      <main className="flex-grow container mx-auto p-4 space-y-8">
        <About />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default Home;