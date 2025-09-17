import React, { useRef } from 'react';
import GameCards from '../GameCard';
import SliderGameCardData from '../CardData/SliderGameCardData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Shopsli = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <div className='theme-Shop-Slider-Content'>
        <div className='relative'>
          <Slider
            ref={sliderRef}
            {...settings}
          >
            {SliderGameCardData.map((value) => {
              return (
                <GameCards
                  key={value.id}
                  classNameImage='theme-Shop-Slider'
                  CardImage={value.image}
                />
              );
            })}
          </Slider>
        </div>
        <div className='absolute lg:top-[310px] md:top-[390px] transform -translate-y-1/2 md:hidden xs:hidden flex justify-between items-center  md:mt-10 md:mb-20 lg:w-[1500px] m-auto font-medium lg:mt-14 lg:mb-16 xs:pt-5 lg:px-3'>
          <button
            className='button w-[50px] h-[50px] flex justify-center items-center text-[40px] text-[#1cafbe] border-2 border-[#1cafbe]  bg-transparent rounded-full'
            onClick={previous}
          >
            <i className='fa-solid fa-angle-left'></i>
          </button>
          <button
            className='button w-[50px] h-[50px] flex justify-center items-center text-[40px] text-[#1cafbe] border-2 border-[#1cafbe]  bg-transparent rounded-full'
            onClick={next}
          >
            <i className='fa-solid fa-angle-right'></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Shopsli;
