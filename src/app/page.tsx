import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import UnderConstruction from '../components/UnderConstruction';

const Home: React.FC = () => {
  return (
    <div>
      <UnderConstruction />
      <Header />
      <main>     
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;