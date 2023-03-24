import React from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Phone from "../../img/phone.png";

export const Phonenavbar = ({menu,toggle}) => {
  return (
    <div className='mobilenav' style={toggle ? {display:"block"}:{display:"none"}} onClick={menu}>
       <div className="navbarmobile w-80 bg-white min-h-screen flex justify-between items-start flex-col pb-8" style={toggle ? {right:"0"}:{right:"-50%"}}>
            <div className="mobilenavheader w-full bg-orange-600 flex p-2 justify-between ">
          <div className="search flex justify-evenly items-center">
            <label htmlFor=""><SearchOutlinedIcon/></label>
            <input type="search" placeholder="Student"/>
          </div>
          <span className='w-10 h-10 text-center leading-8 text-white font-extrabold' onClick={menu}><CloseIcon/></span>
            </div>
            <p className="uppercase mobilenavmenu flex flex-col my-6 font-bold text-lg  pl-8">
          <a href="" onClick={menu}>Home</a>
          <a href="about.html" onClick={menu}>about us</a>
          <a href="" onClick={menu}>Enrolments</a>
          <a href="" onClick={menu}>curriculam</a>
          <a href="campus" onClick={menu}>campus</a>
          <a href="#news" onClick={menu}>news</a>
          <a href="" onClick={menu}>events</a>
          <a href="" onClick={menu}>Employement</a>
          <a href="" onClick={menu}>tour</a>
          <a href="#footer" onClick={menu}>contact us</a>
            </p>
            <p className="text-center text-lg font-semibold  pl-8">
              <a href="">Employement </a> | <a href=""> Tour </a> | 
              <a href="">  Contact Us</a>
            </p>
            <div className="header-contact-information text-lg font-semibold text-center pl-8">
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
       </div>
    </div>
  )
}
