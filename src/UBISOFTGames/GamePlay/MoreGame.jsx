import React from 'react';
import Heading from '../Heading';
import AcLogoBtn from './AcLogoM';
const MoreGame = () => {
  return (
    <React.Fragment>
      <div>
        <div className='theme-MoreGame'>
          <Heading
            className='theme-MoreGamesTitle'
            title={'More Games'}
          />
        </div>
        <div className='theme-MoreGameCover'>
          <div
            className='theme-MoreGameCoverIMG'
            style={{
              backgroundImage: `url(https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1dx8G642rlGiebjWWDCymz/9f7efc7331c99c5602dd6ed53b26b035/ubi-more-games-header-acm-1920x1080.jpg)`,
            }}
          >
            <AcLogoBtn />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default MoreGame;
