import React from 'react';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Btn from '../Button';
const JoinUbiSoft = () => {
  return (
    <React.Fragment>
      <div>
        <div
          className='theme-JoinUbiSoftImg md:hidden xs:hidden'
          style={{
            backgroundImage: `url(https://store.ubisoft.com/on/demandware.static/-/Library-Sites-shared-library-web/default/dwe8f65fd7/images/category-banners/HomeHero_Ubisoft+_NewPlans-Dec23_Generic-v3_desk.jpg)`,
          }}
        >
          <div className='lg:flex lg:justify-center lg:items-end lg:flex-col lg:w-full lg:h-[250px] text-white'>
            <div className='lg:flex lg:justify-start lg:w-[700px]'>
              <Heading
                className={'lg:text-[25px] lg:font-bold'}
                title={'A UBISOFT+ FOR EVERYONE'}
              />
            </div>
            <div className='lg:flex lg:justify-start lg:w-[700px]'>
              <Paragraph
                className={'lg:text-[20px] lg:font-bold'}
                title={'More ways to play with Premium and Classics plans'}
              />
            </div>
            <div className='lg:flex lg:justify-start lg:w-[700px]'>
              <Btn
                className={
                  'lg:text-[15px] lg:font-bold lg:w-[150px] lg:h-[40px] lg:bg-[#428ee0] lg:rounded-full lg:my-3'
                }
                title={'JOIN NOW'}
              />
            </div>
          </div>
        </div>
        <div
          className='theme-JoinUbiSoftImg lg:hidden xs:hidden '
          style={{
            backgroundImage: `url(https://store.ubisoft.com/on/demandware.static/-/Library-Sites-shared-library-web/default/dw16dc294e/images/category-banners/HomeHero_Ubisoft+_NewPlans-Dec23_Generic-v3_tab.jpg)`,
          }}
        >
          <div className='lg:flex lg:justify-center lg:items-end lg:flex-col lg:w-full lg:h-[250px] text-white'>
            <div className='lg:flex lg:justify-start lg:w-[700px]'>
              <Heading
                className={'lg:text-[25px] lg:font-bold'}
                title={'A UBISOFT+ FOR EVERYONE'}
              />
            </div>
            <div className='lg:flex lg:justify-start lg:w-[700px]'>
              <Paragraph
                className={'lg:text-[20px] lg:font-bold'}
                title={'More ways to play with Premium and Classics plans'}
              />
            </div>
            <div className='lg:flex lg:justify-start lg:w-[700px]'>
              <Btn
                className={
                  'lg:text-[15px] lg:font-bold lg:w-[150px] lg:h-[40px] lg:bg-[#428ee0] lg:rounded-full lg:my-3'
                }
                title={'JOIN NOW'}
              />
            </div>
          </div>
        </div>
        <div
          className='theme-JoinUbiSoftImg lg:hidden md:hidden'
          style={{
            backgroundImage: `url(https://store.ubisoft.com/on/demandware.static/-/Library-Sites-shared-library-web/default/dwf913b9fc/images/category-banners/HomeHero_Ubisoft+_NewPlans-Dec23_Generic-v3_mob.jpg)`,
          }}
        >
          <div className='lg:flex lg:justify-center lg:items-end lg:flex-col lg:w-full lg:h-[250px] text-white'>
            <div className='lg:flex lg:justify-start lg:w-[700px]'>
              <Heading
                className={'lg:text-[25px] lg:font-bold'}
                title={'A UBISOFT+ FOR EVERYONE'}
              />
            </div>
            <div className='lg:flex lg:justify-start lg:w-[700px]'>
              <Paragraph
                className={'lg:text-[20px] lg:font-bold'}
                title={'More ways to play with Premium and Classics plans'}
              />
            </div>
            <div className='lg:flex lg:justify-start lg:w-[700px]'>
              <Btn
                className={
                  'lg:text-[15px] lg:font-bold lg:w-[150px] lg:h-[40px] lg:bg-[#428ee0] lg:rounded-full lg:my-3'
                }
                title={'JOIN NOW'}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default JoinUbiSoft;
