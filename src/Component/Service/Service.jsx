import React from 'react'
import './Service.scss'
import Poons from "../../img/chamoch.png"
import Language from "../../img/mog.png"
import Car from "../../img/car.png"
import Home from "../../img/home.png"
import Head from "../../img/Head.png"
import Teacher from "../../img/teach.png"

import Child from "../../img/kids.png"
export const Service = () => {
  return (
    <div className='service w-10/12 m-auto'>
      <h1 className='text-2xl text-center font-bold text-btncolor uppercase'>our service</h1>
      <hr className='w-20 h-1 bg-orange-500 m-auto'/>
      <div className="service-data flex flex-col lg:flex-row">
        <div className="servicedataone w-full lg:w-4/12 ">
          <div className="meals w-full flex rounded-lg overflow-hidden mt-14">
            <div className="poons p-2 w-2/12 bg-orange-500 flex justify-center items-center"><img src={Poons} alt="" /></div>
            <div className="mealsdata p-2 pr-0 w-10/12 ">
              <h3 className='text-lg font-bold text-btncolor'>Meals Provided</h3>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque veniam?</p>
            </div>
          </div>
          <div className="meals w-full flex rounded-lg overflow-hidden mt-14">
            <div className="poons p-2 w-2/12 bg-orange-500 flex justify-center items-center"><img src={Language} alt="" /></div>
            <div className="mealsdata p-2 pr-0 w-10/12 ">
              <h3 className='text-lg font-bold text-btncolor'>Language Lessons</h3>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque veniam?</p>
            </div>
          </div>
          <div className="meals w-full flex rounded-lg overflow-hidden mt-14">
            <div className="poons p-2 w-2/12 bg-orange-500 flex justify-center items-center"><img src={Car} alt="" /></div>
            <div className="mealsdata p-2 pr-0 w-10/12 ">
              <h3 className='text-lg font-bold text-btncolor'>Transportation</h3>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque veniam?</p>
            </div>
          </div>
        </div>

        <div className="servicedatatwo  w-full lg:w-4/12 mt-auto text-center p-8"><img src={Child} alt="" className='m-auto'/></div>



        <div className="servicedatathree  w-full lg:w-4/12">
        <div className="meals w-full flex rounded-lg overflow-hidden mt-14">
            <div className="poons p-2 w-2/12 bg-orange-500 flex justify-center items-center"><img src={Home} alt="" /></div>
            <div className="mealsdata p-2 pr-0 w-10/12 ">
              <h3 className='text-lg font-bold text-btncolor'>Full Day Session</h3>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque veniam?</p>
            </div>
          </div>
          <div className="meals w-full flex rounded-lg overflow-hidden mt-14">
            <div className="poons p-2 w-2/12 bg-orange-500 flex justify-center items-center"><img src={Head} alt="" /></div>
            <div className="mealsdata p-2 pr-0 w-10/12 ">
              <h3 className='text-lg font-bold text-btncolor'>Special Education</h3>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque veniam?</p>
            </div>
          </div>
          <div className="meals w-full flex rounded-lg overflow-hidden mt-14">
            <div className="poons p-2 w-2/12 bg-orange-500 flex justify-center items-center"><img src={Teacher} alt="" /></div>
            <div className="mealsdata p-2 pr-0 w-10/12 ">
              <h3 className='text-lg font-bold text-btncolor'>Qualified Teachers</h3>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cumque veniam?</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
