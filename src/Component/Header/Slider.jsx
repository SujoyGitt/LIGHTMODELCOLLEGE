import React, { useEffect } from 'react'
import { Slidesdata } from './Slidesdata';
export const Slider = () => {
  useEffect(() => {
    let Child = document.querySelector(".slider-inner");
    var k = 1;
    let count = 0;
    setInterval(() => {
      k = k + 1;
      count += 100;
      if (Child) {
        Child.style.transform = "translateX(" + "-" + count + "%" + ")";
        Child.style.transition = 0.3 + "s";
      }
      if (count > 300) {
        count = 0;
        if (Child) {
          Child.style.transform = "translateX(" + "-" + count + "%" + ")";
          Child.style.transition = 0 + "s";
        }
      }
      if (k > 4) {
        k = 1;
        document.querySelector(".i" + k).checked = true;
       }
        document.querySelector(".i" + k).checked = true;
      // Child.style.transform=`translateX(-${count}%)`;
    }, 3000);
    
//indicator start

document.querySelector('.i1').addEventListener('click',()=>{
  if(Child){
    Child.style.transform = "translateX(0%)";
  }
});
document.querySelector('.i2').addEventListener('click',()=>{
  if(Child){
Child.style.transform = "translateX(-100%)";
}
});
document.querySelector('.i3').addEventListener('click',()=>{
  if(Child){
    Child.style.transform = "translateX(-200%)";
  }
});
document.querySelector('.i4').addEventListener('click',()=>{
  if(Child){
    Child.style.transform = "translateX(-300%)";
  }
});
  });
  //indicator end
  return (
    <div className="slider w-10/12 h-4/6 m-auto bg-white  mt-8 relative ">
        <div className="leftarrow w-8 h-16 text-white">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="rightarrow w-8 h-16 text-white">
          <i className="fas fa-chevron-right"></i>
        </div>
        
        <div className="slider-outer w-full h-full overflow-x-hidden">
          <div className="slider-inner flex h-full w-full">
            <div className="slide1 h-full min-w-full ">
             <Slidesdata/>
            </div>
            <div className="slide1 h-full min-w-full "><Slidesdata/></div>
            <div className="slide1 h-full min-w-full "><Slidesdata/></div>
            <div className="slide1 h-full min-w-full "><Slidesdata/></div>
          </div>
        </div>
        <div className="indicator">
            <input type="radio" className="i1" name="su" value="jpg/1.jpg" />
            <input type="radio" className="i2" name="su" value="jpg/2.jpg" />
            <input type="radio" className="i3" name="su" value="jpg/3.jpg" />
            <input type="radio" className="i4" name="su" value="jpg/4.jpg" />
        </div>
      </div>
  )
}
