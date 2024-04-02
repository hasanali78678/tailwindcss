import React, { useState } from "react";
import LogoImg from "./LogoImg";
import Hover from "./PlayHover";
import ShopHover from "./ShopHover";
import ExploreDrop from "./ExploreDropDwon";
import HelpDrop from "./HelpDrop";
export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [arrow, setArrow] = useState(false);
  return (
    <div className="theme-container">
      <div className="theme-header xs:z-50 md:z-50">
        <div className="theme-toggle ">
          <div onClick={() => setOpen(!open)} className="lg:hidden xs:w-[30px]">
            <p>{open ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-ellipsis-vertical"></i>}</p>
          </div>
          <LogoImg />
          <div className="theme-user-md">
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
        <div className={`theme-NavBar ${open ? "flex" : "hidden"} `}>
          <ul className="theme-ul">
            <li className="theme-list group relative">
              PLAY
              <div className="theme-drop-icon">
                <p onClick={() => setArrow(!arrow)}>{arrow ? <i className="fa-solid fa-angle-up xs:mb-20"></i> :  <i className="fa-solid fa-angle-down"></i>}</p>
              </div>
              <div className={`${arrow ? "xs:flex xs:h-[80px]" : "xs:hidden"} `}>
                <Hover />
              </div>
            </li>
            <li className="theme-list2 group relative">
              SHOP
              <ShopHover />
              <div className="theme-drop-icon">
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </li>
            <li className="theme-list2 group relative">
              EXPLORE
              <ExploreDrop />
              <div className="theme-drop-icon">
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </li>
            <li className="theme-list2 group relative">
              HELP
              <HelpDrop />
              <div className="theme-drop-icon">
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </li>
          </ul>
          <div className="theme-download">
            <p className="theme-donw-text">
              Download Ubisoft Connect
              <i className="theme-down-icon fa-solid fa-download"></i>
            </p>
            <div className="theme-seacrh-md">
              <p><i className="fa-solid fa-magnifying-glass"></i></p>
              <p className="theme-secarh-icon">Type your Search</p>
            </div>
            <div className="theme-user-lg">
              <p>
                <i className=" fa-solid fa-user"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
