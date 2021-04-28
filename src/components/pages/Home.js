import React from 'react';
import '../../App.css';
//import Cards from '../Cards';
import HeroSection from '../HeroSection';
//import Data from '../Data';
import Section1 from '../homeComponents/Section1';
import Section2 from '../homeComponents/Section2';
import Choose from '../homeComponents/Choose';
import Opinion from '../homeComponents/Opinions';
import SectionContactForm from '../homeComponents/SectionContactForm';



function Home() {
  return (
    <>
      <HeroSection />
      <Section1 />
      <Section2 />
      {/*<Cards /> */}
     {/* <Data />*/}
     <Choose  />
     <Opinion />
     <SectionContactForm />
     
    </>
  );
}

export default Home;
