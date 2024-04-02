import React from "react";
import Heading from "./Heading";
import Btn from './Button';
import MostCard from './ShopMoastP';
const ShopHover = () => {
    return(
        <React.Fragment>
            <div className="theme-Play left-[-240px] px-5 xs:left-[-0px] xs:z-50">
                <div className="theme-con lg:px-12 lg:py-6">
                    <div className="theme-content">
                        <div className="theme-firstSide ">
                            <div className="lg:h-[405px]">
                                <div className="xs:hidden">
                                    <Heading 
                                        className='theme-categroy'
                                        title={'BROWSE BY PLATFORM'}
                                    />
                                </div>
                                <div>
                                    <ul>
                                        <li className="theme-categroy-li"><a href="/Shop">Video Games</a></li>
                                        <li className="theme-categroy-li"><a href="">DLC</a></li>
                                        <li className="theme-categroy-li"><a href="">Best Sellers</a></li>
                                        <li className="theme-categroy-li"><a href="">Pre-Order</a></li>
                                        <li className="theme-categroy-li"><a href="">Deals</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="theme-Btn-con lg:w-[550px] lg:mt-4 xs:hidden">
                                <Btn 
                                    className='theme-Btn  w-[230px] '
                                    title={'UBISOFT STORE'}
                                />
                            </div>
                        </div>
                        <div className="lg:mx-8 xs:hidden">
                            <div>
                                <Heading 
                                    className='theme-categroy'
                                    title={'SHOP BY GAME'}
                                />
                            </div>
                            <div className="xs:hidden">
                                <ul>
                                    <li className="theme-categroy-li"><a href="">Skull and Bones</a></li>
                                    <li className="theme-categroy-li"><a href="">Rainbow Six Siege</a></li>
                                    <li className="theme-categroy-li"><a href="">Rocksmith+</a></li>
                                    <li className="theme-categroy-li"><a href="">Avatar: Frontiers of Pandora</a></li>
                                    <li className="theme-categroy-li"><a href="">Prince of Persia The Lost Crown</a></li>
                                    <li className="theme-categroy-li"><a href="">Assassin's Creed Mirage</a></li>
                                    <li className="theme-categroy-li"><a href="">Assassin's Creed Mirage</a></li>
                                    <li className="theme-categroy-li"><a href="">Assassin's Creed 4 Black Flag</a></li>
                                    <li className="theme-categroy-li"><a href="">Ghost Recon Breakpoint Ultimate Edition</a></li>
                                    <li className="theme-categroy-li"><a href="">For Honor</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lg:ml-5 lg:w-[550px] xs:hidden">
                        <div>
                            <Heading 
                                className='theme-categroy'
                                title={'MOST POPULAR'}
                            />
                            <div className="theme-MostPopular">
                                <div className="theme-MostCard">
                                    <MostCard 
                                        classNameContent={'theme-Cards'}
                                        classNameImg={'theme-CardImg'}
                                        classNameImage={'theme-MCardImage'}
                                        classNameTitle={'theme-MCardTitle'}
                                        classNameEdition={'theme-Edition'}
                                        classNamePrice={'theme-Price'}
                                        CardImage={'https://store.ubisoft.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw4de2b2d7/images/large/6295081027efc536e38350a1.jpg?sw=300&sh=395&sm=fit'}
                                        GameTitle={"Skull and Bones"}
                                        GameEdition={'Premium Edition'}
                                        GamePrice={'$89.99'}
                                    />
                                    <MostCard 
                                        classNameContent={'theme-Cards'}
                                        classNameImg={'theme-CardImg'}
                                        classNameImage={'theme-MCardImage'}
                                        classNameTitle={'theme-MCardTitle'}
                                        classNameEdition={'theme-Edition'}
                                        classNamePrice={'theme-Price'}
                                        CardImage={'https://store.ubisoft.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwa9e82d35/images/large/61d56f7aa6102b495e0ffff1.jpg?sw=300&sh=395&sm=fit'}
                                        GameTitle={"Tom Clancy's Rainbow Six Siege"}
                                        GameEdition={'Deluxe Edition'}
                                        GamePrice={'$89.99'}
                                    />
                                    <MostCard 
                                        classNameContent={'theme-Cards'}
                                        classNameImg={'theme-CardImg'}
                                        classNameImage={'theme-MCardImage'}
                                        classNameTitle={'theme-MCardTitle'}
                                        classNameEdition={'theme-Edition'}
                                        classNamePrice={'theme-Price'}
                                        CardImage={'https://store.ubisoft.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw35765a7e/images/large/5fb696e80d253c2914972100.jpg?sw=300&sh=395&sm=fit'}
                                        GameTitle={"Rocksmith+"}
                                        GameEdition={'12 month'}
                                        GamePrice={'$89.99'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="theme-Btn-con lg:w-[600px] lg:mt-11 xs:hidden">
                            <Btn 
                                className='theme-Btn w-[180px] '
                                title={'VIEW ALL'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default ShopHover;