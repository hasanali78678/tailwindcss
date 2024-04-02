import React from "react";
import Heading from "./Heading";
import Btn from './Button';
const Hover = () => {
    return(
        <React.Fragment>
            <div className="theme-Play lg:left-[-140px] px-5 md:left-[-0px] md:z-50 xs:left-[-0px] xs:z-50">
                <div className="theme-con lg:px-12 lg:py-6">
                    <div className="theme-content">
                        <div className="theme-firstSide">
                            <div className="">
                                <div className="md:hidden xs:hidden ">
                                    <Heading 
                                        className='theme-categroy'
                                        title={'BROWSE BY CATEGORY'}
                                    />
                                </div>
                                <div>
                                    <ul>
                                        <li className="theme-categroy-li"><a href="/Play">Featured</a></li>
                                        <li className="theme-categroy-li"><a href="">New To Old</a></li>
                                        <li className="theme-categroy-li"><a href="">Free To Play</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:hidden xs:hidden">
                                <div>
                                    <Heading 
                                        className='theme-categroy lg:pt-5'
                                        title={'BROWSE BY PLATFORM'}
                                        />
                                    </div>
                                    <div>
                                        <ul>
                                            <li className="theme-categroy-li"><a href="">PC</a></li>
                                            <li className="theme-categroy-li"><a href="">Xbox</a></li>
                                            <li className="theme-categroy-li"><a href="">PlayStation</a></li>
                                            <li className="theme-categroy-li"><a href="">Nintendo Switch</a></li>
                                            <li className="theme-categroy-li"><a href="">Virtual Reality</a></li>
                                            <li className="theme-categroy-li"><a href="">Mobile</a></li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="theme-Btn-con lg:w-[550px] lg:mt-4 md:hidden xs:hidden">
                                <Btn 
                                    className='theme-Btn bg-pink-600 w-[230px] '
                                    title={'VIEW ALL GAMES'}
                                />
                            </div>
                        </div>
                        <div className="lg:mx-8 md:hidden xs:hidden">
                            <div>
                                <Heading 
                                    className='theme-categroy'
                                    title={'BROWSE BY GAME'}
                                />
                            </div>
                            <div>
                                <ul>
                                    <li className="theme-categroy-li"><a href="">Assassin's Creed Mirage</a></li>
                                    <li className="theme-categroy-li"><a href="">Prince of Persia: The Lost Crown</a></li>
                                    <li className="theme-categroy-li"><a href="">XDefiant</a></li>
                                    <li className="theme-categroy-li"><a href="">Avatar: Frontiers of Pandora</a></li>
                                    <li className="theme-categroy-li"><a href="">The Crew Motorfest</a></li>
                                    <li className="theme-categroy-li"><a href="">Star Wars Outlaws</a></li>
                                    <li className="theme-categroy-li"><a href="">Just Dance 2024 Edition</a></li>
                                    <li className="theme-categroy-li"><a href="">Mario + Rabbids® Sparks of Hope</a></li>
                                    <li className="theme-categroy-li"><a href="">Tom Clancy’s The Division Heartland</a></li>
                                    <li className="theme-categroy-li"><a href="">Assassin's Creed Nexus VR</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lg:ml-5 md:hidden xs:hidden">
                        <div>
                            <Heading 
                                className='theme-categroy'
                                title={'DISCOVER UBISOFT+'}
                            />
                            <div className="theme-Discover" style={{backgroundImage: `url(https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4tBpf5HvSRBpQS7geVtpOm/511011752152e6d8b4b0530aeb2e7d62/ubi-global_nav-discover_ubi_plus.jpg)`}}>
                            </div>
                        </div>
                        <div className="theme-Btn-con lg:w-[600px] lg:mt-11">
                            <Btn 
                                className='theme-Btn bg-sky-600 w-[180px] '
                                title={'VIEW PLANS'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Hover;