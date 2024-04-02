import React from "react";
import Heading from "./Heading";
import Btn from './Button';
import GameCards from './GameCard'
const ExploreDrop = () => {
    return(
        <React.Fragment>
            <div className="theme-Play left-[-340px] pl-5 xs:left-[-0px] xs:z-50">
                <div className="theme-con">
                    <div className="theme-content">
                        <div className="theme-firstSide lg:w-[440px]">
                            <div className="lg:ml-12 lg:my-6">
                                    <div className="xs:hidden">
                                        <Heading 
                                            className='theme-categroy'
                                            title={'LATEST NEWS'}
                                            />
                                    </div>
                                    <div>
                                        <GameCards 
                                            classNameContent={'lg:w-[600px] lg:flex lg:flex-row-2 lg:my-3 xs:w-[310px]'}
                                            classNameImage={'theme-ExCardsImg'}
                                            classNameTitle={'theme-ExTitle'}
                                            CardImage={'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/69Iw8r8CABNVpUJ7vpA6ET/4d89f693e4ad699a2b6228fdf8e8eb86/FH_Y7S4_Varangian_Guard_Hero_Thumbnail.jpg'}
                                            GameTitle={"For Honor Celebrates 35 Million Players and Unveils New Varangian Guard Hero, Arriving February 1"}
                                        />
                                        <GameCards 
                                            classNameContent={'lg:w-[600px] lg:flex lg:flex-row-2 lg:my-8 xs:hidden'}
                                            classNameImage={' theme-ExCardsImg'}
                                            classNameTitle={'theme-ExTitle '}
                                            CardImage={'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/69Iw8r8CABNVpUJ7vpA6ET/4d89f693e4ad699a2b6228fdf8e8eb86/FH_Y7S4_Varangian_Guard_Hero_Thumbnail.jpg'}
                                            GameTitle={"For Honor Celebrates 35 Million Players and Unveils New Varangian Guard Hero, Arriving February 1"}
                                        />
                                        <GameCards 
                                            classNameContent={'lg:w-[600px] lg:flex lg:flex-row-2 lg:my-8 xs:hidden'}
                                            classNameImage={' theme-ExCardsImg'}
                                            classNameTitle={'theme-ExTitle '}
                                            CardImage={'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/69Iw8r8CABNVpUJ7vpA6ET/4d89f693e4ad699a2b6228fdf8e8eb86/FH_Y7S4_Varangian_Guard_Hero_Thumbnail.jpg'}
                                            GameTitle={"For Honor Celebrates 35 Million Players and Unveils New Varangian Guard Hero, Arriving February 1"}
                                        />
                                    </div>
                                </div>
                            <div className="theme-Btn-con lg:w-[900px] lg:mt-4 xs:hidden">
                                <Btn 
                                    className='theme-Btn  w-[230px] '
                                    title={'VIEW ALL NEWS'}
                                />
                            </div>
                        </div>
                        <div className="lg:mx-14 lg:w-[440px] lg:my-6 xs:hidden">
                            <div>
                                <Heading 
                                    className='theme-categroy'
                                    title={'LATEST NEWS'}
                                />
                            </div>
                                    <GameCards 
                                    classNameContent={'lg:w-[600px] lg:flex lg:flex-row-2 lg:my-3'}
                                    classNameImage={' theme-ExCardsImg'}
                                    classNameTitle={'theme-ExTitle '}
                                    CardImage={'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/69Iw8r8CABNVpUJ7vpA6ET/4d89f693e4ad699a2b6228fdf8e8eb86/FH_Y7S4_Varangian_Guard_Hero_Thumbnail.jpg'}
                                    GameTitle={"For Honor Celebrates 35 Million Players and Unveils New Varangian Guard Hero, Arriving February 1"}
                                />
                                <GameCards 
                                    classNameContent={'lg:w-[600px] lg:flex lg:flex-row-2 lg:my-8'}
                                    classNameImage={' theme-ExCardsImg'}
                                    classNameTitle={'theme-ExTitle '}
                                    CardImage={'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/69Iw8r8CABNVpUJ7vpA6ET/4d89f693e4ad699a2b6228fdf8e8eb86/FH_Y7S4_Varangian_Guard_Hero_Thumbnail.jpg'}
                                    GameTitle={"For Honor Celebrates 35 Million Players and Unveils New Varangian Guard Hero, Arriving February 1"}
                                />
                                <GameCards 
                                    classNameContent={'lg:w-[600px] lg:flex lg:flex-row-2 lg:my-8'}
                                    classNameImage={' theme-ExCardsImg'}
                                    classNameTitle={'theme-ExTitle '}
                                    CardImage={'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/69Iw8r8CABNVpUJ7vpA6ET/4d89f693e4ad699a2b6228fdf8e8eb86/FH_Y7S4_Varangian_Guard_Hero_Thumbnail.jpg'}
                                    GameTitle={"For Honor Celebrates 35 Million Players and Unveils New Varangian Guard Hero, Arriving February 1"}
                                />
                        </div>
                    </div>
                    <div className="theme-ExpInD xs:hidden">
                    <div className="">
                            <Heading 
                                className='theme-categroy'
                                title={'INSIDE UBISOFT'}
                            />
                            <div className="">
                                <div>
                                    <ul>
                                        <li className="theme-InsideLink"><a href="">About Us</a></li>
                                        <li className="theme-InsideLink"><a href="">Careers</a></li>
                                        <li className="theme-InsideLink"><a href="">How We Make Games</a></li>
                                        <li className="theme-InsideLink"><a href="">Social Impact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Heading 
                                className='theme-categroy pt-5'
                                title={'MORE THAN GAMES'}
                            />
                            <div className="">
                                <div>
                                    <ul>
                                        <li className="theme-InsideLink"><a href="">Film & TV</a></li>
                                        <li className="theme-InsideLink"><a href="">Books, Music, & Podcasts</a></li>
                                        <li className="theme-InsideLink"><a href="">Education & Events</a></li>
                                        <li className="theme-InsideLink"><a href="">Parks & Experiences</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default ExploreDrop;