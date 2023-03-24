import React from "react";
import Kids from "../../img/All-kids.png";
import "./Footer.scss";
import RoomIcon from "@material-ui/icons/Room";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import EmailIcon from "@material-ui/icons/Email";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import CopyrightIcon from '@material-ui/icons/Copyright';
export const Footer = () => {
  return (
    <div className="footer w-full " id="footer">
      <div className="footertop h-32 w-10/12 m-auto translate-y-4">
        <img src={Kids} alt="" className="w-full h-full object-cover lg:object-contain" />
      </div>
      <div className="footerbottom w-full pt-20">
        <div className="footercard  w-10/12  mx-auto   relative">
          <div className="footerwhite w-full h-full py-4 lg:py-0 bg-white flex flex-wrap">
            <div className="footerlocation w-full md:w-6/12 lg:w-3/12 transform-none lg:-translate-y-8">
              <span className="w-16 h-16 rounded-full text-gray-100 bg-orange-500 inline-block">
                <RoomIcon />
              </span>
              <br />
              <p className="my-6">
                111, New Street,
                <br /> New Road, KK 123456
              </p>
            </div>
            <div className="footernumber w-full md:w-6/12  lg:w-3/12  lg:-translate-y-8">
              <span className="w-16 h-16 rounded-full text-gray-100  bg-orange-500 inline-block">
                <CallRoundedIcon />
              </span>
              <br />
              <p className="my-6">
                <a href="tel:180012311221234">1800 123 1122 1234</a>
                <br />
                <a href="tel:9064171925">+91 9064171925</a>
              </p>
            </div>
            <div className="footeremail w-full md:w-6/12  lg:w-3/12 transform-none lg:-translate-y-8">
              <span className="w-16 h-16 rounded-full text-gray-100  bg-orange-500 inline-block">
                <EmailIcon />
              </span>
              <p className="my-6">
                <a href="mailto:info@schoolname.com">info@lightmodelcollege.com</a>
                <br />
                <a href="mailto:support@schoolname.com">
                  support@lightmodelcollege.com
                </a>
              </p>
            </div>
            <div className="footersocialmedia w-full md:w-6/12  lg:w-3/12 lg:-translate-y-8">
              <span className="w-16 h-16 rounded-full text-gray-100  bg-orange-500 inline-block">
                <ThumbUpRoundedIcon />
              </span>
              <div className="icons text-center w-full flex justify-center gap-2  items-center my-6">
                <span className="w-7 text-center leading-6 text-gray-100 h-7 bg-btncolor">
                  <FacebookIcon />
                </span>
                <span className="w-7 text-center leading-6 text-gray-100 h-7 bg-btncolor">
                  <TwitterIcon />
                </span>
                <span className="w-7 text-center leading-6 text-gray-100 h-7 bg-btncolor">
                <i class="fab fa-google-plus-g"></i>
                </span>
                <span className="w-7 text-center leading-6 text-gray-100 h-7 bg-btncolor">
                  <LinkedInIcon />
                </span>
                <span className="w-7 text-center leading-6 text-gray-100 h-7 bg-btncolor">
                  <PinterestIcon />
                </span>
                <span className="w-7 text-center leading-6 text-gray-100 h-7 bg-btncolor">
                  <InstagramIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footerlogo w-full">
          <div className="header-contact-information mt-8 w-52 m-auto">
            <div className="sun m-auto w-16 h-8  bg-orange-500 "></div>
            <h4 className="text-center">Logo here</h4>
          </div>
        </div>
        <div className="footernav w-full py-3 text-center ">
        <p className="gap-5 capitalize text-gray-700 flex justify-center flex-wrap">
          <a href="#header">Home</a>
          <a href="about.html">about us</a>
          <a href="">Enrolments</a>
          <a href="">curriculam</a>
          <a href="campus">campus</a>
          <a href="">news</a>
          <a href="">events</a>
          <a href="">Employement</a>
          <a href="">tour</a>
          <a href="#footer">contact us</a>
        </p> 
        <p className="gap-5 capitalize text-gray-800 text-sm text-center mt-3"><CopyrightIcon className="text-gray-600 text-xs text-center"/> 2023 LIGHTMODELCOLLEGE. All Right Reserved</p>
      </div>
      </div>
    </div>
  );
};
