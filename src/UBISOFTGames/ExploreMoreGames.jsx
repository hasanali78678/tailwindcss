import React, { useRef } from "react";
import Heading from "./Heading";
import cardData from "./CardData/ExploreMoreGamesData";
import GameCards from "./GameCard";
import Btn from "./Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExploreMoreGames = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        }
      ]
  };

  return (
    <React.Fragment>
      <div className="lg:w-full md:w-full xs:w-full xs:pb-5">
        <Heading
          className={
            "lg:text-[35px] text-center lg:my-10 font-medium md:text-[40px] md:my-8 xs:text-[23px] xs:my-5"
          }
          title={"EXPLORE MORE GAMES"}
        />
        <div className="lg:w-full m-auto lg:px-14 xs:px-2 ">
          <Slider ref={sliderRef} {...settings}>
            {cardData.map((slide, index) => {
              return (
                <div key={index}>
                  <GameCards
                    classNameContent={
                      "lg:mx-4 lg:hover:underline lg:cursor-pointer md:mx-3 xs:mx-2"
                    }
                    classNameImage={
                      "lg:w-[190px] lg:h-[250px] md:w-[100px] md:h-[130px] xs:w-[120px] xs:h-[150px]"
                    }
                    classNameTitle={
                      "mt-2 font-medium md:w-[100px] md:text-[16px] xs:w-[100px] xs:text-[16px] lg:w-[190px]"
                    }
                    CardImage={slide.image}
                    GameTitle={slide.title}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className=" flex justify-between items-center  md:mt-10 md:mb-20 lg:w-full m-auto font-medium lg:mt-14 lg:mb-16 xs:pt-2">
         
            <button className="button w-[80px] h-[50px] flex justify-end items-center text-[40px] text-[#b9b1c3] hover:text-[#9c999f] bg-[#f5f6f7] hover:bg-[#e1e2e4] border-0 rounded-r-full pr-5" onClick={previous}>
            <i class="fa-solid fa-angle-left"></i>
            </button>
            <Btn
                className={
                "w-[230px] xs:hidden  rounded-full text-[15px] h-[50px] text-white bg-pink-600"
                }
                title={"VIEW ALL GAMES"}
            />
            <button className="button w-[80px] h-[50px] flex justify-start items-center text-[40px] text-[#b9b1c3] hover:text-[#9c999f] bg-[#f5f6f7] hover:bg-[#e1e2e4] border-0 rounded-l-full pl-5" onClick={next}>
            <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
      </div>
    </React.Fragment>
  );
};

export default ExploreMoreGames;
