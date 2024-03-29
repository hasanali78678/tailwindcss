import React, { useState } from "react";
import LogoImg from "./LogoImg";
import Hover from "./PlayHover";
import ShopHover from "./ShopHover";
import ExploreDrop from "./ExploreDropDwon";
import HelpDrop from "./HelpDrop";
export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="theme-container">
      <div className="theme-header xs:z-50 md:z-50">
        <div className="theme-toggle">
          <spna onClick={() => setOpen(!open)} className="lg:hidden">
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </spna>
          <LogoImg />
          <span className="theme-user-md">
            <i class="fa-solid fa-user"></i>
          </span>
        </div>
        <div className={`theme-NavBar ${open ? "flex" : "hidden"} `}>
          <ul className="theme-ul">
            <li className="theme-list group relative">
              PLAY
              <Hover />
              <spna className="theme-drop-icon">
                <i class="fa-solid fa-angle-down"></i>
              </spna>
            </li>
            <li className="theme-list2 group relative">
              SHOP
              <ShopHover />
              <spna className="theme-drop-icon">
                <i class="fa-solid fa-angle-down"></i>
              </spna>
            </li>
            <li className="theme-list2 group relative">
              EXPLORE
              <ExploreDrop />
              <spna className="theme-drop-icon">
                <i class="fa-solid fa-angle-down"></i>
              </spna>
            </li>
            <li className="theme-list2 group relative">
              HELP
              <HelpDrop />
              <spna className="theme-drop-icon">
                <i class="fa-solid fa-angle-down"></i>
              </spna>
            </li>
          </ul>
          <div className="theme-download">
            <p className="theme-donw-text">
              Download Ubisoft Connect
              <i className="theme-down-icon fa-solid fa-download"></i>
            </p>
            <div className="theme-seacrh-md">
              <p>
                <i class="fa-solid fa-magnifying-glass"></i>
                <sapn className="theme-secarh-icon">Type your Search</sapn>
              </p>
            </div>
            <div className="theme-user-lg">
              <p>
                <i class=" fa-solid fa-user"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
