import React, { useEffect } from 'react'
import "./LatestNews.scss"
import { Newsdata } from './Newsdata';
export const LatestNews = () => {
  useEffect(() => {
    let Child = document.querySelector(".news-inner");
    var k = 1;
    let count = 0;
    setInterval(() => {
      k = k + 1;
      count += 33.33;
      if (Child) {
        Child.style.transform = "translateX(" + "-" + count + "%" + ")";
        Child.style.transition = 0.3 + "s";
      }
      if (count > 66.66) {
        count = 0;
        if (Child) {
          Child.style.transform = "translateX(" + "-" + count + "%" + ")";
          Child.style.transition = 0 + "s";
        }
      }
    }, 3000);
  });
  return (
    <div className='news w-10/12 m-auto relative' id='news'>
      <h1 className="text-2xl text-center font-bold text-btncolor uppercase">
         Latest news
        </h1>
        <hr className="w-16 h-1 bg-orange-500 m-auto my-2" />
       <div className="newsparent w-full overflow-x-hidden my-8">
        <div className="news-inner  h-full flex ">
           <Newsdata/>
           <Newsdata/>
           <Newsdata/>
        </div>
       </div>
       <div className="leftarrow w-8 h-16 text-white">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="rightarrow w-8 h-16 text-white">
          <i className="fas fa-chevron-right"></i>
        </div>
    </div>
  )
}
