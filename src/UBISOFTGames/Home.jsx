import React from 'react';
import NavBar from './NavBar';
import Slider from './Slider';
import ExploreMoreGames from './ExploreMoreGames';
import JoinUbi from './JoinUbiS';
import LatestNews from './LatestNews';
import UbiSoftStore from './ubiSoftStore';
import IsideUbiSoft from './InsideUbisoft';
import UbisoftCon from './UbisoftCon';
import VisitChannels from './VisitChannels';
import Footer from './Footer';

export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <Slider />
      <ExploreMoreGames />
      <JoinUbi />
      <LatestNews />
      <UbiSoftStore />
      <IsideUbiSoft />
      <UbisoftCon />
      <VisitChannels />
      <Footer />
    </React.Fragment>
  );
}
