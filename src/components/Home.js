import React from 'react';

import HomeHeader from './HomeHeader';
import ThreeColumns from './ThreeColumns';
import SimpleSteps from './SimpleSteps';
import AboutUs from './AboutUs';
import WhoWeHelp from './WhoWeHelp';
import Footer from './Footer';

function Home() {
  return <>
    <HomeHeader />
    <ThreeColumns />
    <SimpleSteps />
    <AboutUs />
    <WhoWeHelp />
    <Footer />
  </>
}

export default Home;
