import React, { useState } from "react";
import LogoImg from "./LogoImg";
import Hover from "./PlayHover";
import ShopHover from "./ShopHover";
import ExploreDrop from "./ExploreDropDwon";
import HelpDrop from "./HelpDrop";
export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [arrowhover, setArrowhover] = useState(false);
  const [arrowshop, setArrowshop] = useState(false);
  const [arrowexplore, setArrowexplore] = useState(false);
  const [arrowhlep, setArrowhlep] = useState(false);
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
              <p onClick={() => {
                setArrowhover(!arrowhover);
                // Ensure to hide the shop content when toggling hover content
                setArrowshop(false);
                setArrowexplore(false);
                setArrowhlep(false);
              }}>
                {arrowhover ? <i className="fa-solid fa-angle-up xs:mb-20"></i> : <i className="fa-solid fa-angle-down"></i>}
              </p>
              </div>
              <div className={`${arrowhover ? "xs:flex xs:h-[80px]" : "xs:hidden"} `}>
                <Hover />
              </div>
            </li>
            <li className="theme-list2 group relative">
              SHOP
              <div className="theme-drop-icon">
              <p onClick={() => {
                setArrowshop(!arrowshop);
                // Ensure to hide the hover content when toggling shop content
                setArrowhover(false);
                setArrowexplore(false);
                setArrowhlep(false);
              }}>
                {arrowshop ? <i className="fa-solid fa-angle-up xs:mb-20"></i> : <i className="fa-solid fa-angle-down"></i>}
              </p>
            </div>
            <div className={`${arrowshop ? "xs:flex xs:h-[100px]" : "xs:hidden"} `}>
              <ShopHover />
            </div>
            </li>
            <li className="theme-list2 group relative">
              EXPLORE
              <p onClick={() => {
                setArrowexplore(!arrowexplore);
                // Ensure to hide the hover content when toggling explore content
                setArrowhover(false);
                setArrowshop(false);
                setArrowhlep(false);
              }} className="xs:w-full xs:flex xs:justify-end">
                {arrowexplore ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
              </p>
              <div className={`${arrowexplore ? "xs:flex xs:h-[300px]" : "xs:hidden"} `}>
              <ExploreDrop />
              </div>
            </li>
            <li className="theme-list2 group relative">
              HELP
              <p onClick={() => {
                setArrowhlep(!arrowhlep);
                // Ensure to hide the hover content when toggling hlep content
                setArrowhover(false);
                setArrowshop(false);
                setArrowexplore(false);
              }} className="xs:w-full xs:flex xs:justify-end">
                {arrowhlep ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
              </p>
              <div className={`${arrowhlep ? "xs:flex xs:h-[350px]" : "xs:hidden"} `}>
              <HelpDrop />
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
