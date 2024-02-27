import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Btn from "./Button";
const JoinUbi = () => {
    return(
        <React.Fragment>
            <div className="lg:hidden md:hidden xs:bg-cover bg-center bg-no-repeat  xs:h-[365px] xs:w-full  xs:py-20"  style={{backgroundImage: `url(https://useruploads.visualwebsiteoptimizer.com/useruploads/244616/images/e9316cf2c841d9408a6fff8a1ef42c76_umobile.png)` }}>
                <div className="xs:flex xs:justify-stat xs:items-center xs:flex-col xs:h-[300px] ">
                    <Heading
                        className="xs:text-white xs:font-medium xs:text-[30px] xs:w-[300px] xs:text-center leading-9" 
                        title={'Play Prince of Persia: The Lost Crown'}
                    />
                    <Paragraph 
                        className="xs:text-white xs:text-[20px] xs:w-[300px] xs:text-center xs:mt-2"
                        title={'Includes the Deluxe Edition & bonus content with Ubisoft+'}
                    />
                    <Btn 
                        className="xs:w-[200px] xs:text-white xs:font-medium xs:bg-sky-600 xs:rounded-full xs:h-[40px] xs:mt-12"
                        title={'JOIN UBISOFT+'}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}
export default JoinUbi;