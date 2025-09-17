import React from 'react';
import Btn from './Button';
import Paragraph from './Paragraph';
const Footer = () => {
  return (
    <React.Fragment>
      <div className='lg:w-full bg-[#2a2b2f] pb-10 '>
        <div className='lg:w-full lg:px-16 m-auto py-10 flex justify-between items-center md:flex md:justify-center md:items-center md:flex-col xs:flex xs:justify-center xs:items-center xs:flex-col'>
          <div className='w-[110px] h-[50px] flex justify-start items-center cursor-pointer md:order-3 xs:order-3'>
            <img
              src='https://www.storylandstudios.com/wp-content/uploads/2022/01/Ubisoft-Horizontal-Logo-WHITE_1.png'
              alt='UBISoft'
            />
          </div>
          <Btn
            className={
              'w-[330px] h-[50px] text-white font-medium text-[17px] bg-[#2d2e31] rounded-full'
            }
            title={'DOWNLOAD UBISOFT CONNECT'}
          />
          <div className='w-[140px] h-[50px] flex justify-center items-center cursor-pointer'>
            <i className='lg:text-[40px] md:text-[30px] xs:text-[30px] mr-2 text-white fa-solid fa-globe'></i>
            <select className='text-white bg-transparent cursor-pointer '>
              <option value='ENGLISH'>ENGLISH</option>
              <option value='URDU'>URDU</option>
            </select>
          </div>
        </div>
        <div className='lg:w-full lg:px-16 m-auto flex justify-between items-start md:flex-col md:flex md:justify-center md:items-center xs:flex-col pt-3 text-center xs:flex xs:justify-center xs:items-center'>
          <div className='w-[160px] '>
            <ul>
              <li className='text-white text-[14px] font-medium hover:underline cursor-pointer my-2'>
                PRIVACY
              </li>
              <li className='text-white text-[14px] font-medium hover:underline cursor-pointer my-2'>
                TERMS OF USE
              </li>
              <li className='text-white text-[14px] font-medium hover:underline cursor-pointer my-2'>
                LEGAL INFO
              </li>
              <li className='text-white text-[14px] font-medium hover:underline cursor-default my-1'>
                SET COOKIES
              </li>
              <li className='text-[#9b9b9b] text-[13px] font-medium hover:underline cursor-pointer mt-3 '>
                UK Tax strategy
              </li>
              <li className='text-[#9b9b9b] text-[13px] font-medium hover:underline cursor-pointer mt-3 '>
                Modern Slavery Statement{' '}
              </li>
            </ul>
          </div>
          <div className='w-[160px] lg:ml-24'>
            <ul>
              <li className='text-white text-[14px] font-medium hover:underline cursor-pointer my-2'>
                UBISOFT CONNECT
              </li>
              <li className='text-white text-[14px] font-medium hover:underline cursor-pointer my-2'>
                HELP
              </li>
            </ul>
          </div>
          <div className='w-[160px]'>
            <ul>
              <li className='text-white text-[14px] font-medium hover:underline cursor-pointer my-2'>
                INVESTORS
              </li>
              <li className='text-white text-[14px] font-medium hover:underline cursor-pointer my-2'>
                PRESS
              </li>
            </ul>
          </div>
          <div className='w-[160px]'>
            <ul>
              <li className='text-white text-[14px] font-medium hover:underline cursor-pointer my-2'>
                COMPANY
              </li>
              <li className='text-white text-[14px] font-medium hover:underline cursor-pointer my-2'>
                CAREERS
              </li>
              <li className='text-white text-[14px] font-medium hover:underline cursor-pointer my-2'>
                LOCATIONS
              </li>
            </ul>
          </div>
          <div className='w-[280px] text-[11px] text-[#f0f3ed] text-right'>
            <Paragraph
              title={
                '© 2024 Ubisoft Entertainment. All Rights Reserved. Ubisoft, Ubi.com and the Ubisoft logo are trademarks of Ubisoft Entertainment in the U.S. and/or other countries.'
              }
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
