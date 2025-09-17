import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CoverSlider from './CoverSlider/coverslider'; // Assuming this is your custom slider component
import coverSliderData from './CardData/coverSliderData';

export default function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(false);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false, // Set arrows to false to hide navigation arrows
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div className='relative'>
      <Slider
        ref={sliderRef}
        {...settings}
      >
        {coverSliderData.map((slide, index) => (
          <div key={index}>
            <CoverSlider
              image={slide.image}
              clogo={slide.clogo}
              title={slide.title}
              paragraph={slide.paragraph}
              classNamebtn={slide.btnC}
              btn1={slide.btn1}
              btn2={slide.btn2}
              cgamelogo={slide.cgamelogo}
            />
          </div>
        ))}
      </Slider>
      <div className='w-full flex justify-between items-center absolute bottom-[0px] transform -translate-y-1/2'>
        <button
          className='button w-[80px] h-[50px] flex justify-end items-center text-[40px] text-white  bg-[#2d2d2d6a] hover:bg-[#e1e2e4ae] border-0 rounded-r-full pr-5'
          onClick={previous}
        >
          <i className='fa-solid fa-angle-left'></i>
        </button>
        <button
          className='button w-[85px] h-[50px] flex justify-start items-center text-[40px] text-white  bg-[#2d2d2d6a] hover:bg-[#e1e2e4ae] border-0 rounded-l-full pl-5'
          onClick={next}
        >
          <i className='fa-solid fa-angle-right'></i>
        </button>
      </div>
    </div>
  );
}
