import React, {useState } from "react";
import "./Header.css";
import Phone from "../../img/phone.png";
import { Slider } from "./Slider";
import MenuIcon from '@material-ui/icons/Menu';
import {Phonenavbar} from "./Phonenavbar.jsx"
import { NavLink } from "react-router-dom";

export const Header = () => {
let [toggle,settoggle] = useState(false);
let menu = ()=>{
  settoggle(true)
  if(toggle === true){
    settoggle(false)
  }
}
console.log(toggle)
  return (
    <div className="header w-full h-screen " id="header">
      <div className="header-contact-parent w-full" >
        <div className="header-contact w-5/6 py-4 m-auto flex justify-between items-center ">
          <div className="header-contact-information w-56 hidden lg:block">
            <p className="flex items-center">
              <span>
                <img src={Phone} className="" alt="" />
              </span>
              <span>
                <a href="tel:9064171925" className="pl-2">
                  +90 9064171925
                </a>
              </span>
            </p>
            <p className="flex items-center">
              <span>
                <i className="fas fa-envelope text-iconblue"></i>
              </span>
              <span>
                <a href="mailto:sujoy143656@gmail.com" className="pl-2 lowercase">
                  info@LIGHTMODELCOLLEGE.com
                </a>
              </span>
            </p>
          </div>
          <div className="header-contact-information w-42 lg:w-52 ">
            <div className="sun m-auto w-16 h-8  bg-orange-500"></div>
            <h4 className="text-center">Logo here</h4>
          </div>
          <div className="header-contact-information w-64 text-right hidden lg:block">
            <p className="text-center ">
              <a href="">Employement </a> | <a href=""> Tour </a> | 
              <a href="">  Contact Us</a>
            </p>
            <div className="search w-56 border border-gray-300 border-1 mx-auto p-1 bg-white mt-2">
              <input type="text" className="focus:outline-none"/>
              <label for="">
                <i className="fas fa-search"></i>
              </label>
            </div>
          </div>
         <div className="menu w-12 h-12 border-2 border-orange-500 rounded-full text-center leading-6 lg:hidden p-2" onClick={menu}>
            <MenuIcon className="text-white text-2xl"/>
          </div>
          <Phonenavbar menu={menu} toggle={toggle}/>
        </div>
      </div>
      <div className="navbar w-full py-3 bg-orange-500 text-center lg:flex justify-center none hidden lg:block">
        <p className="gap-5 uppercase text-white flex justify-center">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">about us</NavLink>
          <NavLink to="/curriculam">Enrolments</NavLink>
          <NavLink to="/curriculam">curriculam</NavLink>
          <NavLink to="/campus">campus</NavLink>
          <a href="#news">news</a>
          <NavLink to="/events">events</NavLink>
          <NavLink to="/Employement">Employement</NavLink>
          <NavLink to="/tour">tour</NavLink>
          <a href="#footer">contact us</a>
        </p>
      </div>
      <Slider/>
    </div>
  );
};
