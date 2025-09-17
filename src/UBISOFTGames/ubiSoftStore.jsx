import React from 'react';
import Heading from './Heading';
import GameCard from './GameCard';
import ubiSoftStoreData from './CardData/ubiSoftStoreData';
const UbiSoftStore = () => {
  return (
    <React.Fragment>
      <div className='md:py-10 lg:px-14 m-auto'>
        <Heading
          className={
            'lg:text-[26px] md:text-[30px] md:py-4 xs:text-[20px] text-center lg:pt-10  xs:mt-5 font-medium'
          }
          title={'UBISOFT STORE'}
        />
        <div className='lg:w-full m-auto lg:flex lg:justify-center lg:flex-row md:flex md:justify-center md:items-center md:pb-10 md:pt-5 xs:flex xs:justify-center xs:items-center xs:flex-col px-1 lg:pt-10 lg:pb-16 xs:pb-2'>
          {ubiSoftStoreData.map((value) => {
            return (
              <GameCard
                key={value.id}
                classNameContent='lg:w-[410px] lg:h-[540px]  md:w-[230px] md:h-[300px] xs:w-[350px] xs:h-[450px] lg:mx-4 md:mx-2 row-span lg:hover:underline text-white cursor-pointer xs:my-5'
                classNameImage='absolute lg:w-[410px] lg:h-[540px]  md:w-[230px] md:h-[300px] xs:w-[350px] xs:h-[450px]'
                CardImage={value.image}
                classNameTitle={
                  'relative mt-5 xs:mt-10 flex justify-center lg:w-[410px] m-auto mx-5 text-center text-[20px] md:text-[15px] font-medium leading-5'
                }
                GameTitle={value.title}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
export default UbiSoftStore;
