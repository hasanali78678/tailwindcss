import React from 'react';
import GameCards from '../GameCard';
import Btn from '../Button';
import PlaySortgameData from '../CardData/PlaySortgameData';
const SortGames = () => {
  return (
    <React.Fragment>
      <div className='lg:w-full lg:px-12 lg:pb-12 lg:flex lg:justify-start lg:items-start md:flex md:justify-center xs:flex xs:justify-between flex-wrap xs:px-2 xs:mb-10'>
        {PlaySortgameData.map((value) => {
          return (
            <GameCards
              key={value.id}
              classNameContent={
                'lg:hover:underline lg:cursor-pointer lg:mx-4 md:mx-3 xs:mx-2'
              }
              classNameImage={
                'lg:w-[235px] lg:h-[310px] md:w-[350px] md:h-[450px] xs:w-[150px] xs:h-[200px]'
              }
              classNameTitle={
                'mt-2 font-medium md:text-[16px] md:w-[350px] xs:w-[130px] xs:text-[18px] lg:w-[190px]'
              }
              CardImage={value.image}
              GameTitle={value.title}
            />
          );
        })}
        <div className='theme-SortLoadBtnCon'>
          <Btn
            className='theme-SortLoadBtn'
            title={'LOAD MORE'}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default SortGames;
