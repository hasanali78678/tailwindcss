import React from 'react';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
export default function Cover() {
  return (
    <React.Fragment>
      <div>
        <div
          className='theme-Cover-containerMd'
          style={{
            backgroundImage: `url(https://store.ubisoft.com/on/demandware.static/-/Library-Sites-shared-library-web/default/dw6f4b5b26/images/category-banners/CatBan_Games_Mob_01_2024.jpg)`,
          }}
        >
          <div className=' flex-col m-auto xs:w-full md:flex md:justify-center md:items-start md:w-full md:h-[200px] md:pb-8 font-medium'>
            <div className='text-white  text-center md:flex md:justify-center  md:items-center md:flex-col xs:flex xs:justify-end xs:items-center xs:flex-col'>
              <Heading
                className={
                  'text-[30px] lg:mb-3 font-sans md:leading-none  md:text-[20px] xs:leading-8 xs:w-[250px] '
                }
                title={'UBISOFT GAMES'}
              />
              <Paragraph
                className={
                  'lg:text-[15px] font-sans md:text-[20px] md:text-center md:leading-6 md:mt-5 xs:text-center xs:leading-6 xs:mt-5 xs:text-[15px] xs:w-[200px]'
                }
                title={
                  'Buy, download and play our latest releases, best sellers and free games!'
                }
              />
            </div>
          </div>
        </div>
        <div
          className='theme-Cover-containerLg'
          style={{
            backgroundImage: `url(https://store.ubisoft.com/on/demandware.static/-/Library-Sites-shared-library-web/default/dw690ce819/images/category-banners/CatBan_Games_Desk_01_2024.jpg)`,
          }}
        >
          <div className=' lg:w-full flex justify-center items-center lg:h-[200px] flex-col m-auto font-medium'>
            <div className='text-white  text-center md:flex md:justify-end md:items-center md:flex-col xs:flex xs:justify-end xs:items-center xs:flex-col'>
              <Heading
                className={
                  'text-[30px] lg:mb-3 font-sans md:leading-none  md:text-[60px] xs:leading-8 xs:w-[150px] '
                }
                title={'UBISOFT GAMES'}
              />
              <Paragraph
                className={
                  'lg:text-[15px] font-sans md:text-[25px] md:text-center md:leading-6 md:mt-5 xs:text-center xs:leading-6 xs:mt-5 xs:text-[18px]'
                }
                title={
                  'Buy, download and play our latest releases, best sellers and free games!'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
