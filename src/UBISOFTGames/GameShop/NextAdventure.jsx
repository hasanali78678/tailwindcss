import React from "react";
import Heading from "../Heading";
import GameCards from "../GameCard";
import NextAdventureData from '../CardData/NextAdventureData';
const NextAdventure = () => {
    return(
        <React.Fragment>
            <div classnName="lg:w-full md:w-full  xs:w-full ">
                <div className="theme-NextAdventure-Content">
                    <Heading 
                        className="theme-NextAdventure-Title"
                        title={'Find your next adventure'}
                    />
                </div>
                <div className="lg:w-full lg:pt-20 lg:pb-14 m-auto lg:flex lg:justify-center lg:items-start md:flex md:justify-start md:px-11 md:pt-16 xs:flex xs:justify-center flex-wrap xs:pt-16 lg:px-2  xs:px-2 xs:mb-20">
                {
                    NextAdventureData.map((value)=>{
                        return(
                            <GameCards 
                                classNameContent={'lg:w-[250px] lg:h-[460px] lg:bg-white lg:mx-2 lg:cursor-pointer md:w-[310px] md:h-[560px] md:bg-white xs:w-full xs:h-[220px] xs:bg-white md:mx-3 md:my-2 xs:mx-2 xs:my-2 '}
                                classNameImage={'lg:w-[250px] lg:h-[360px] md:w-[310px] md:h-[430px] xs:float-start xs:w-[130px] xs:h-[160px] xs:pr-2 xs:pr-2'}
                                classNameEdition={"lg:pl-3 lg:text-[14px] lg:text-gray-400 md:pl-3 md:text-[14px] md:text-gray-400 xs:pl-3 xs:text-[14px] xs:text-gray-400"}
                                classPriceContent={'lg:flex lg:justify-end lg:items-end lg:h-[40px] lg:px-5 md:flex md:justify-end md:items-end md:h-[40px] md:px-5 xs:flex xs:justify-end xs:items-end xs:h-[100px] xs:px-3'}
                                classNamePrice="lg:text-[25px] lg:text-orange-500 md:text-[25px] md:text-orange-500 xs:text-[25px] xs:text-orange-500"
                                classNameOLDPrice="lg:pl-2 lg:text-[20px] lg:text-gray-400 lg:line-through md:pl-2 md:text-[20px] md:text-gray-400 md:line-through xs:pl-2 xs:text-[20px] xs:text-gray-400 xs:line-through"
                                classNameTitle={'mt-2 lg:w-[260px] lg:pl-3 font-medium md:w-[300px] md:pl-3 md:text-[16px] xs:w-full  xs:text-[16px] lg:w-[190px] xs:pl-3 xs:text-[16px] xs:pt-14'}
                                key={value.id}
                                CardImage={value.image}
                                GameTitle={value.title}
                                GameEdition={value.edition}
                                GamePrice={value.price}
                                GameOLDPrice={value.oldprice}
                            />
                        );
                    })
                }
                </div>
            </div>
        </React.Fragment>
    );
}
export default NextAdventure;