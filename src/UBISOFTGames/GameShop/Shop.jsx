import React from 'react';
import NavBar from '../NavBar';
import Cover from './Cover';
import Slider from './Slider';
import NextAdventure from './NextAdventure';
import JoinUbiSoft from './JoinUbiSoft';
import Game from './Games';
import ScrollToTopButton from './scroll';
const Shop = () => {
  return (
    <React.Fragment>
      <div className='bg-black'>
        <ScrollToTopButton />
        <NavBar />
        <Cover />
        <Slider />
        <NextAdventure />
        <JoinUbiSoft />
        <Game />
      </div>
    </React.Fragment>
  );
};
export default Shop;
