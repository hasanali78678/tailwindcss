import React from 'react';
import Heading from './Heading';
import GameCard from './GameCard';
import insodeubiSoftData from './CardData/InsideUbisoftData';
const IsideUbiSoft = () => {
  return (
    <React.Fragment>
      <div className=' bg-slate-100 pb-2 md:py-10 lg:px-14'>
        <Heading
          className={
            'lg:text-[26px] md:text-[30px] md:py-4 xs:text-[19px] xs:pt-5 text-center lg:pt-10 font-medium'
          }
          title={'INSIDE UBISOFT'}
        />
        <div className='lg:full m-auto lg:flex lg:justify-center lg:flex-row lg:px-1 lg:pt-10 pb-20 md:flex md:justify-center md:items-center md:pb-10 md:pt-5 xs:w-full xs:flex xs:flex-col xs:justify-center xs:items-center '>
          {insodeubiSoftData.map((value) => {
            return (
              <GameCard
                key={value.id}
                classNameContent='lg:w-[410px] lg:h-[540px]  md:w-[230px] md:h-[300px] md:mx-2  xs:w-[350px] xs:h-[450px] rounded-lg lg:mx-4 lg:row-span-2 flex justify-center items-end lg:hover:underline text-white cursor-pointer xs:my-5'
                classNameImage='absolute lg:w-[410px] lg:h-[540px]  md:w-[230px] md:h-[300px] xs:w-[350px] xs:h-[450px]  rounded-lg'
                CardImage={value.image}
                classNameTitle={
                  'relative text-center text-[20px] font-medium w-[415px] h-[120px] bg-[#00000072] pt-4 rounded-b-lg md:text-[25px] leading-6'
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
export default IsideUbiSoft;
