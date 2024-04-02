import React, { useRef } from "react";
import  GameCards from '../GameCard';
import Heading from '../Heading';
import FavGameData from '../CardData/FavGameData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Favgames = () => {
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
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
    };
    return(
        <React.Fragment> 
            <div className="bg-slate-100 lg:pb-36 md:pb-5">
                <Heading 
                    className={"lg:text-[35px] m-auto text-center lg:py-10 font-medium md:text-[28px] md:py-8 xs:text-[23px] xs:py-5 "}
                    title={'FEATURED GAMES'}
                />
                <div className=" flex-wrap xs:px-2 xs:mb-10">
                <Slider ref={sliderRef} {...settings}>    
                    {
                        FavGameData.map((value)=>{
                            return(
                                <GameCards 
                                    key={value.id}
                                    classNameContent={'lg:mx-4 lg:hover:underline lg:cursor-pointer md:mx-4 xs:mx-2'}
                                    classNameImage={'lg:w-[235px] lg:h-[310px] md:w-[120px] md:h-[150px] xs:w-[150px] xs:h-[200px]'}
                                    classNameTitle={'mt-2 font-medium md:text-[16px] md:w-[120px] xs:w-[130px] xs:text-[18px] lg:w-[190px]'}
                                    CardImage={value.image}
                                    GameTitle={value.title}
                                />
                            );
                        })
                    }
                </Slider>
                <div className=" flex justify-between items-center  md:mt-10 md:mb-20 lg:w-full m-auto font-medium lg:mt-14 lg:mb-16 xs:pt-2">
                    <button className="button w-[80px] h-[50px] flex justify-end items-center text-[40px] text-[#b9b1c3] hover:text-[#9c999f] bg-[#f5f6f7] hover:bg-[#e1e2e4] border-0 rounded-r-full pr-5" onClick={previous}>
                    <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <button className="button w-[80px] h-[50px] flex justify-start items-center text-[40px] text-[#b9b1c3] hover:text-[#9c999f] bg-[#f5f6f7] hover:bg-[#e1e2e4] border-0 rounded-l-full pl-5" onClick={next}>
                    <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
            </div>
        </React.Fragment>
    );
}
export default Favgames;