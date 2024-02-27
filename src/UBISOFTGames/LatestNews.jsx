import React from "react";
import Heading from "./Heading";
import GameCards from './GameCard';
import Btn from './Button';
const LatestNews = () => {
    return(
        <React.Fragment>
            <div className=" bg-slate-100 md:pb-16 lg:px-14">
                <Heading 
                    className={"lg:text-[30px] text-center lg:pt-10 font-medium md:text-[30px] md:pt-14 md:pb-5 xs:text-[20px] xs:py-6"}
                    title={'LATEST NEWS'}
                />
                <div className="lg:w-full lg:h-[45px] lg:flex lg:justify-center lg:items-center text-pink-600  text-[15px] mb-5 lg:cursor-pointer m-auto xs:w-[280px]  md:text-[18px]">
                    <ul className="lg:flex lg:justify-start lg:items-center md:w-full md:flex md:flex-wrap md:justify-center md:items-center">
                        <div className="lg:flex xs:flex xs:justify-between md:flex ">
                            <li className="lg:flex lg:justify-center lg:items-center md:w-[100px] hover:text-black hover:underline md:flex md:justify-center lg:mx-5 font-medium xs:flex xs:mx-4">All NEWS</li>
                            <li className="hover:text-black hover:underline lg:mx-5 lg:flex lg:justify-center lg:items-center md:flex md:justify-center  xs:flex xs:mx-5 md:w-[160px] md:mx-2">ASSASSIN'S CREED</li>
                        </div>
                        <li className="hover:text-black hover:underline lg:mx-5 flex justify-center items-center xs:my-1 md:w-[130px] md:mx-2 md:flex md:justify-center ">RAINBOW SIX</li>
                        <li className="hover:text-black hover:underline lg:mx-5 flex justify-center items-center xs:my-1 md:w-[290px] md:mx-2 md:flex md:justify-center ">AVATAR: FRONTIERS OF PANDORA</li>
                        <li className="hover:text-black hover:underline lg:mx-5 flex justify-center items-center xs:my-1 md:w-full md:flex md:justify-center md:mt-1">THE DIVISION</li>
                    </ul>
                </div>
                <div className="lg:w-full xs:w-full md:w-full md:flex md:justify-center md:items-center md:flex-col m-auto lg:grid lg:grid-rows-3 lg:grid-flow-col lg:px-2 xs:px-3 ">
                    <GameCards 
                        classNameContent={'lg:w-[650px] lg:mx-3 lg:row-span-2 lg:hover:underline cursor-pointer xs:my-[20px] md:my-6 '}
                        classNameImage={'lg:w-[650px] lg:h-[350px] md:w-[720px] '}
                        classNameTitle={'lg:mt-2 font-medium xs:h-[72px] xs:py-2 xs:pr-1 '}
                        CardImage={'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/69Iw8r8CABNVpUJ7vpA6ET/d8648258bf41fa159b90cfd06276873f/FH_Y7S4_Varangian_Guard_Hero_Thumbnail.jpg'}
                        GameTitle={"For Honor Celebrates 35 Million Players and Unveils New Varangian Guard Hero, Arriving February 1"}
                    />
                    <GameCards 
                        classNameContent={'lg:w-[550px] lg:flex lg:mx-3 col-span-2 lg:hover:underline cursor-pointer xs:my-[20px] md:my-6 '}
                        classNameImage={' lg:w-[310px] lg:h-[170px] md:w-[720px]'}
                        classNameTitle={'lg:ml-6 font-medium lg:w-[200px] xs:h-[72px] xs:py-2 xs:pr-1'}
                        CardImage={'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6JO45YaCSL41v1Rqp0jQiJ/f260d4ecd46d75e48ac6c139c4056b32/CaptainLaserhawk_CrushingLove.jpg'}
                        GameTitle={"Captain Laserhawk: A Blood Dragon Remix Crushing Love Manga Out Now"}
                    />
                    <GameCards 
                        classNameContent={'lg:w-[550px] lg:flex lg:mx-3 lg:col-span-2 lg:hover:underline cursor-pointer xs:my-[20px] md:my-6'}
                        classNameImage={' lg:w-[310px] lg:h-[170px] md:w-[720px]'}
                        classNameTitle={'lg:ml-6 font-medium lg:w-[250px] xs:h-[72px] xs:py-2 xs:pr-1 '}
                        CardImage={'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5TGi1aF2G2JleANFwAwyfz/a48e4e9252d21a57da91dc547592cb95/Starpets_960x540.jpg'}
                        GameTitle={"Starpets Early Teaser Features Older, Wilder Rabbids"}
                    />
                    <GameCards 
                        classNameContent={'lg:w-[550px] lg:flex lg:mx-3 lg:col-span-2 lg:hover:underline cursor-pointer xs:my-[20px] md:my-6'}
                        classNameImage={' lg:w-[310px] lg:h-[170px] md:w-[720px]'}
                        classNameTitle={'lg:ml-6 font-medium lg:w-[250px] xs:h-[72px] xs:py-2 xs:pr-1 '}
                        CardImage={'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/319TBvFBNMeqyQksERqfVj/61161687163afb960664ad77c86c3489/POP_Concept_1_960x540.jpg'}
                        GameTitle={"Prince of Persia: The Lost Crown – Accessibility Spotlight"}
                    />
                    <GameCards 
                        classNameContent={'lg:w-[550px] lg:flex lg:mx-3 lg:col-span-1 lg:hover:underline cursor-pointer xs:my-[20px] border '}
                        classNameImage={' lg:w-[310px] lg:h-[170px] md:w-[720px]'}
                        classNameTitle={'lg:ml-6  md:text-[20px] font-medium lg:w-[250px] xs:h-[72px] xs:py-2 xs:pr-1 '}
                        CardImage={'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1Y9Cz1owbId5aultJxHvq6/3dc2e7e5f530524521773fe5101e084f/POPTLC_midrez_launch_1_180124_9AM.jpg'}
                        GameTitle={"Prince of Persia: The Lost Crown Out Now"}
                    />
                   
                </div>
                <div className="flex justify-center items-center lg:w-full m-auto font-medium lg:pt-5 lg:pb-14 md:mt-5 xs:pb-14">
                    <Btn 
                        className={"w-[230px]  rounded-full text-[15px] lg:h-[50px] md:w-[250px] md:h-[45px] xs:h-[42px] text-white bg-pink-600"}
                        title={'ALL NEWS'}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}
export default LatestNews;

