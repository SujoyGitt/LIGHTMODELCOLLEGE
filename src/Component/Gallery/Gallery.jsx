import React from 'react'
import Child1 from "../../img/child1.jpg"
import Child2 from "../../img/child2.jpg"
import Child3 from "../../img/child3.jpg"
import Child4 from "../../img/child4.jpg"
import Child5 from "../../img/child5.jpg"
import Child6 from "../../img/child6.jpg"
import Child7 from "../../img/child7.jpg"
import Child8 from "../../img/child8.jpg"
export const Gallery = () => {
  return (
    <div className="gallery w-full mt-16 py-8 pb-0 m-auto bg-gray-100">
      <h1 className='text-center text-btncolor text-2xl uppercase font-bold'>Photo Gallery</h1>
      <hr className='w-24 h-1 bg-orange-500 m-auto'/>
      <div className="galleryparent flex flex-wrap py-8">
        <img src={Child1} className="object-cover w-full sm:w-6/12 md:w-4/12 lg:w-3/12 h-56" alt="" />
        <img src={Child2} className="object-cover w-full sm:w-6/12 md:w-4/12 lg:w-3/12 h-56" alt="" />
        <img src={Child3} className="object-cover w-full sm:w-6/12 md:w-4/12 lg:w-3/12 h-56" alt="" />
        <img src={Child4} className="object-cover w-full sm:w-6/12 md:w-4/12 lg:w-3/12 h-56" alt="" />
        <img src={Child5} className="object-cover w-full sm:w-6/12 md:w-4/12 lg:w-3/12 h-56" alt="" />
        <img src={Child6} className="object-cover w-full sm:w-6/12 md:w-4/12 lg:w-3/12 h-56" alt="" />
        <img src={Child7} className="object-cover w-full sm:w-6/12 md:w-4/12 lg:w-3/12 h-56" alt="" />
        <img src={Child8} className="object-cover w-full sm:w-6/12 md:w-4/12 lg:w-3/12 h-56" alt="" />
      </div>
    </div>
  )
}
