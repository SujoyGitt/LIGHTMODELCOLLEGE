import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
export const Teachers = ({Teacher}) => {
  return (
    <div className="teacherone w-full sm:w-6/12 md:w-4/12 lg:w-3/12 bg-gray-200 mt-4 lg:mt-0">
    <img src={Teacher} alt="" className='w-full object-cover'/>
    <div className="teacherdata  py-3">
      <h1 className="text-2xl text-center font-semibold text-btncolor uppercase">
        john doe
      </h1>
      <h2 className="text-lg text-center uppercase py-1">Teacher</h2>
      <div className="icons text-center w-full flex justify-evenly g-2 items-center">
        <span className="w-8 text-center leading-7 text-gray-100 h-8 bg-grey"><FacebookIcon/></span>
        <span className="w-8 text-center leading-7 text-gray-100 h-8 bg-grey"><TwitterIcon/></span>
        <span className="w-8 text-center leading-7 text-gray-100 h-8 bg-grey"><i class="fab fa-google-plus-g"></i></span>
        <span className="w-8 text-center leading-7 text-gray-100 h-8 bg-grey"><LinkedInIcon/></span>
        <span className="w-8 text-center leading-7 text-gray-100 h-8 bg-grey"><PinterestIcon/></span>
        <span className="w-8 text-center leading-7 text-gray-100 h-8 bg-grey"><InstagramIcon/></span>
      </div>
    </div>
  </div>
  )
}
