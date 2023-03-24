import React, { useEffect } from 'react'
import './Testimonial.scss'
import Mother from "../../img/mother.jpg"

export const Testimonial = () => {
  useEffect(() => {
    let Child = document.querySelector(".testimonial-inner-slider");
    var k = 1;
    let count = 0;
    setInterval(() => {
      k = k + 1;
      count += 20;
      if (Child) {
        Child.style.transform = "translateX(" + "-" + count + "%" + ")";
        Child.style.transition = 0.3 + "s";
      }
      if (count > 80) {
        count = 0;
        if (Child) {
          Child.style.transform = "translateX(" + "-" + count + "%" + ")";
          Child.style.transition = 0 + "s";
        }
      }
      if (k > 5) {
        k = 1;
        document.querySelector(".j" + k).checked = true;
      }
      document.querySelector(".j" + k).checked = true;
      //indicator start

document.querySelector('.j1').addEventListener('click',()=>{
  if(Child){
    Child.style.transform = "translateX(0%)";
  }
});
document.querySelector('.j2').addEventListener('click',()=>{
  if(Child){
Child.style.transform = "translateX(-20%)";
}
});
document.querySelector('.j3').addEventListener('click',()=>{
  if(Child){
    Child.style.transform = "translateX(-40%)";
  }
});
document.querySelector('.j4').addEventListener('click',()=>{
  if(Child){
    Child.style.transform = "translateX(-60%)";
  }
});
document.querySelector('.j5').addEventListener('click',()=>{
  if(Child){
    Child.style.transform = "translateX(-80%)";
  }
});
}, 3000);
  },[]);


  return (
    <div className='testimonial w-full my-12 py-6 pb-2'>
       <h1 className="text-2xl text-center font-bold text-white uppercase">
          What our parents day
        </h1>
        <div className="w-20 h-1 bg-orange-600 m-auto my-2" ></div>
        <div className="testimonial-slider w-8/12 m-auto overflow-x-hidden">
       
          <div className="testimonial-inner-slider  flex">
            <div className="slider-one text-center">
              <img src={Mother} alt="" className='w-32 h-32 rounded-full object-center border-4 border-orange-600 m-auto my-4'/>
               <p className='text-base text-center text-gray-200 my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, hic nam quasi harum temporibus aliquid itaque ab, quisquam modi quo corrupti eius atque facilis beatae. Aperiam, ratione! Aspernatur tempora aut beatae dignissimos omnis deserunt voluptas, velit quia tenetur eum architecto perferendis at commodi, impedit odio consectetur aliquid modi facere eaque nostrum? </p>
            </div>
            <div className="slider-one text-center">
              <img src={Mother} alt="" className='w-32 h-32 rounded-full object-center border-4 border-orange-600 m-auto my-4'/>
               <p className='text-base text-center text-gray-200 my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, hic nam quasi harum temporibus aliquid itaque ab, quisquam modi quo corrupti eius atque facilis beatae. Aperiam, ratione! Aspernatur tempora aut beatae dignissimos omnis deserunt voluptas, velit quia tenetur eum architecto perferendis at commodi, impedit odio consectetur aliquid modi facere eaque nostrum? </p>
            </div>
            <div className="slider-one text-center">
              <img src={Mother} alt="" className='w-32 h-32 rounded-full object-center border-4 border-orange-600 m-auto my-4'/>
               <p className='text-base text-center text-gray-200 my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, hic nam quasi harum temporibus aliquid itaque ab, quisquam modi quo corrupti eius atque facilis beatae. Aperiam, ratione! Aspernatur tempora aut beatae dignissimos omnis deserunt voluptas, velit quia tenetur eum architecto perferendis at commodi, impedit odio consectetur aliquid modi facere eaque nostrum? </p>
            </div>
            <div className="slider-one text-center">
              <img src={Mother} alt="" className='w-32 h-32 rounded-full object-center border-4 border-orange-600 m-auto my-4'/>
               <p className='text-base text-center text-gray-200 my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, hic nam quasi harum temporibus aliquid itaque ab, quisquam modi quo corrupti eius atque facilis beatae. Aperiam, ratione! Aspernatur tempora aut beatae dignissimos omnis deserunt voluptas, velit quia tenetur eum architecto perferendis at commodi, impedit odio consectetur aliquid modi facere eaque nostrum? </p>
            </div>
            <div className="slider-one text-center">
              <img src={Mother} alt="" className='w-32 h-32 rounded-full object-center border-4 border-orange-600 m-auto my-4'/>
               <p className='text-base text-center text-gray-200 my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, hic nam quasi harum temporibus aliquid itaque ab, quisquam modi quo corrupti eius atque facilis beatae. Aperiam, ratione! Aspernatur tempora aut beatae dignissimos omnis deserunt voluptas, velit quia tenetur eum architecto perferendis at commodi, impedit odio consectetur aliquid modi facere eaque nostrum? </p>
            </div>
          </div>
          
        </div>
        <div className="indicator text-center translate-y-8">
            <input type="radio" className="j1" name="sk" value="jpg/1.jpg" />
            <input type="radio" className="j2" name="sk" value="jpg/2.jpg" />
            <input type="radio" className="j3" name="sk" value="jpg/3.jpg" />
            <input type="radio" className="j4" name="sk" value="jpg/4.jpg" />
            <input type="radio" className="j5" name="sk" value="jpg/4.jpg" />
        </div>
    </div>
  )
}
