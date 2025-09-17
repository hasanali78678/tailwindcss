import React from 'react';
import Btn from '../Button';
const AcLogo = () => {
  return (
    <React.Fragment>
      <div className='theme-ACLogoAndBtn'>
        <div className='theme-ACLogoMCon'>
          <div
            className='theme-ACLogoM'
            style={{
              backgroundImage: `url(https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6ZGXGQlH0PmL6FIF6RgKn1/71996737890b29909546e8957e6c48a5/acm-more_games-crest-logo-v1.png)`,
            }}
          ></div>
        </div>
        <div className='theme-AcBtnCon'>
          <Btn
            className={'theme-ACBtn'}
            title={'BUY NOW'}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default AcLogo;
