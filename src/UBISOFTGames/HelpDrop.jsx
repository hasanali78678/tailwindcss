import React from "react";
import Heading from "./Heading";
import Btn from './Button';
import Paragraph from "./Paragraph";
const HelpDrop = () => {
    return(
        <React.Fragment>
            <div class="theme-Play left-[-440px] px-5">
                <div className="theme-con lg:px-12 lg:py-6">
                    <div className="theme-content ">
                            <div className="theme-firstSide flex flex-row ">
                                <div className="lg:w-[250px]">
                                    <div>
                                        <Heading 
                                            className='theme-categroy'
                                            title={'Help'}
                                        />
                                    </div>
                                    <div className="theme-HelpDiscover" style={{backgroundImage: `url(https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6sVGCjWluydrt5wxCx0j7m/fbc5e9c2010cd3852d2fd0bc5979ae3a/ubi-meganav-rabbids-support-540-v2.jpg)`}}>
                                    </div>
                                    <Paragraph 
                                        className={'theme-HelpTile'}
                                        title={'Need Help? We can answer common questions with FAQs or connect you with a representative.'}
                                    />
                                
                                    <div className="theme-Btn-con">
                                        <Btn 
                                            className='theme-Btn bg-pink-600 w-[120px] mt-10'
                                            title={'GET HELP'}
                                        />
                                    </div>
                            </div>
                            <div className="lg:mx-8 lg:w-[250px]">
                                <div>
                                    <div>
                                        <Heading 
                                            className='theme-categroy'
                                            title={'DISCORD'}
                                        />
                                    </div>
                                
                                    <div className="theme-HelpDiscover" style={{backgroundImage: `url(https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/McHxhuZWhHIpnREIE2BHm/b172839515ed8117ddfffe5f236f88e6/ubi-meganav-rabbids-forums-540-v2.jpg)`}}>
                                    </div>
                                    <Paragraph 
                                    className={'theme-HelpTile'}
                                        title={'Join our community for tips & tricks and connect with players from around the world.'}
                                    />
                                    <div className="theme-Btn-con ">
                                        <Btn 
                                            className='theme-Btn bg-pink-600 w-[150px] mt-10'
                                            title={'JOIN DISCORD'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="theme-InSide">
                            <div className="w-[500px]">
                                <Heading 
                                    className='theme-categroy'
                                    title={'UBISOFT CONNECT'}
                                />
                                <div className="theme-InSideImg" style={{backgroundImage: `url(https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/13bPwzrfvjWsPEJtmD0RF9/5ff8a4745aa319d6638b0811abcbe09e/ubisoft-meganav-ubisoft_connect_pc-promo.jpg)`}}>
                                </div>
                                <Paragraph 
                                    className={'theme-UConTitle'}    
                                    title={'Play your games on PC, get unique rewards, and connect with your friends across all platforms. Try the all-new Ubisoft Connect PC Beta by accessing it through the toggle in your desktop app’s navigation bar!'}
                                />
                            </div>
                            <div className="theme-Btn-con lg:w-[600px] mt-10">
                                <Btn 
                                    className='theme-Btn w-[180px] '
                                    title={'VIEW PLANS'}
                                />
                            </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default HelpDrop;