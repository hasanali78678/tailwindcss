import React from "react";
import Paragraph from "./Paragraph";
import Btn from "./Button"
const VisitChannels = () =>{
    return(
        <React.Fragment>
            <div className="lg:w-full md:w-full xs:w-full lg:h-[50px] md:h-[60px] xs:h-[60px] bg-black m-auto  lg:px-14">
                <div className="lg:w-full m-auto  grid grid-cols-3 ">
                    <div className="flex justify-start items-center">
                        <Paragraph 
                            className={'text-[12px] text-neutral-400 md:hidden xs:hidden'}
                            title={"Visit Other Ubisoft Channels"}
                        />
                    </div>
                    <div className="lg:w-[400px] lg:h-[50px] lg:mx-10 md:h-[60px] xs:h-[60px] flex justify-center items-center md:p-2 xs:p-2">
                        <Btn 
                        className="mx-3  text-black bg-white hover:bg-neutral-400 rounded-[50%]  text-[18px] flex justify-center items-center w-[30px] h-[30px] md:hidden xs:hidden"
                            title={<i className="fa-brands fa-twitter"></i>}
                        />
                        <Btn 
                        className="mx-3 text-black bg-white hover:bg-neutral-400 rounded-[50%]  text-[18px] flex justify-center items-center w-[30px] h-[30px] md:hidden xs:hidden"
                            title={<i className="fa-brands fa-facebook-f"></i>}
                        />
                        <Btn 
                        className="mx-3 text-black bg-white hover:bg-neutral-400 rounded-[50%]  text-[18px] flex justify-center items-center w-[30px] h-[30px] md:hidden xs:hidden"
                            title={<i className="fa-brands fa-twitch"></i>}
                        />
                        <Btn 
                        className="mx-3 text-black bg-white hover:bg-neutral-400 rounded-[50%]  text-[18px] flex justify-center items-center w-[30px] h-[30px] md:hidden xs:hidden"
                            title={<i className="fa-brands fa-youtube"></i>}
                        />
                        <Btn 
                        className="mx-3 text-black bg-white hover:bg-neutral-400 rounded-[50%]  text-[18px] flex justify-center items-center w-[30px] h-[30px] md:hidden xs:hidden"
                            title={<i className="fa-brands fa-instagram"></i>}
                        />
                        <Btn 
                        className="lg:mx-3 md:mx-2 xs:mx-2 text-black bg-white hover:bg-neutral-400 rounded-[50%]  lg:text-[18px] md:text-[23px] xs:text-[23px] flex justify-center items-center lg:w-[30px] lg:h-[30px] md:w-[40px] md:h-[40px] xs:w-[40px] xs:h-[40px]"
                            title={<i className="fa-brands fa-discord"></i>}
                        />
                        <Btn 
                        className="lg:mx-3 md:mx-2 xs:mx-2 text-black bg-white hover:bg-neutral-400 rounded-[50%]  lg:text-[18px] md:text-[23px] md:w-[40px] md:h-[40px]   xs:text-[23px] flex justify-center items-center lg:w-[30px] lg:h-[30px] xs:w-[40px] xs:h-[40px]"
                            title={<i className="fa-brands fa-linkedin-in"></i>}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default VisitChannels;
