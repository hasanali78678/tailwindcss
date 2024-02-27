import React from "react";
import Heading from './Heading';
import Paragraph from "./Paragraph";
import Btn from './Button'
const UbisoftCon = () => {
    return(
        <React.Fragment>
            <div className="bg-[#091225]">
                <div className="lg:max-w-[1450px] m-auto lg:ml-16 lg:flex lg:justify-center lg:items-center lg:flex-row xs:flex xs:justify-center xs:items-center xs:flex-col xs:py-6 md:flex md:justify-center md:items-center md:flex-col md:py-6" >
                    <div className="lg:bg-cover lg:bg-no-repeat md:flex md:bg-contain md:bg-no-repeat xs:flex xs:bg-contain xs:bg-no-repeat lg:w-[430px] xs:w-[360px] md:w-[750px] md:h-[420px]  xs:h-[220px] lg:h-[250px]" style={{backgroundImage: `url('https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6SfvkXTESPJr6U4faPWqfA/2dcb6462c958fee3af943cefb88fe0b1/ubisoft-connect-devices-visual-mockup.png')`}}></div>
                    <div className="lg:pl-5 lg:pt-5 lg:w-[805px] md:flex md:justify-center md:items-center md:flex-col xs:flex xs:justify-center xs:items-center xs:flex-col">
                        <Heading 
                            className={'font-medium lg:text-[45px] text-white md:text-[50px] xs:text-[40px]'}
                            title={'Ubisoft Connect'}
                        />
                        <div className="lg:flex lg:flex-row md:flex md:justify-center md:items-center md:flex-col xs:flex xs:justify-center xs:items-center xs:flex-col">
                            <Paragraph 
                            className={' lg:text-[24px] text-white md:text-center md:text-[25px] xs:text-center xs:text-[22px] leading-6'}
                                title={'All your games, friends, and benefits in one place.'}
                            />
                            <Heading 
                                className={'font-medium lg:text-[25px] md:text-[23px] xs:text-[21px] text-white leading-6'}
                                title={'PC | Console | Mobile'}
                            />
                        </div>
                        <Btn 
                            className={"w-[240px] lg:my-5 font-medium hover:border-2 hover:border-sky-600 hover:bg-white hover:text-sky-600 rounded-full text-[15px] h-[35px] text-white bg-[#006ef5] md:w-[280px] md:h-[45px] md:text-[20px] md:mt-5 md:mb-3 xs:mt-5 xs:mb-3"}
                            title={'GET UBISOFT CONNECT'}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default UbisoftCon;