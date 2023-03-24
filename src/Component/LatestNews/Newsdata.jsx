import React from 'react'
import PersonIcon from '@material-ui/icons/Person';

export const Newsdata = () => {
  return (
   <>
          <div className="news-slide w-4/12 gap-6 flex justify-center flex-col lg:flex-row">
              <div className="leftnews md:w-full lg:w-5/12 text-center  relative overflow-y-hidden">
                <div className="news-content absolute text-gray-50 py-6 px-4 w-full h-full top-full ">
                  <h2 className='font-bold text-lg'>Lorem ipsum dolor sit.</h2>
                  <p className='my-3 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, omnis eligendi architecto corrupti, voluptates accusantium cumque magname.</p>
                  <p className='mb-6'><a href=""><PersonIcon/><span> John Doe</span></a><a href="" className='pl-3'><i class="fas fa-comment"></i><span> 11 Comments</span></a></p>
                  <a href="" className='capitalize py-2 px-8 bg-gray-50 text-orange-500 font-bold leading-snug rounded-md'>read more</a>
                </div>
              </div>
              <div className="rightnews md:w-full lg:w-5/12 text-center  relative overflow-y-hidden">
               <div className="news-content absolute text-gray-50 py-6 px-4 w-full h-full top-full ">
                  <h2 className='font-bold text-lg'>Lorem ipsum dolor sit.</h2>
                  <p className='my-3 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, omnis eligendi architecto corrupti, voluptates accusantium cumque magname.</p>
                  <p className='mb-6'><a href=""><PersonIcon/><span> John Doe</span></a><a href="" className='pl-3'><i class="fas fa-comment"></i><span> 11 Comments</span></a></p>
                  <a href="" className='capitalize py-2 px-8 bg-gray-50 text-orange-500 font-bold leading-snug rounded-md'>read more</a>
                </div>
              </div>
           </div>
   </>
  )
}
