import React from "react";
import Teacher1 from "../../img/teacher4.jpg";
import Teacher2 from "../../img/teacher3.jpg";
import Teacher3 from "../../img/teacher2.jpg";
import Teacher4 from "../../img/teacher1.jpg";

import { Teachers } from "./Teachers";
export const Team = () => {
  return (
    <div className="w-full bg-gray-100 pb-14">
      <div className="team w-10/12 m-auto ">
        <h1 className="text-2xl text-center font-bold text-btncolor uppercase">
          meet our team
        </h1>
        <hr className="w-16 h-1 bg-orange-500 m-auto my-2" />
        <div className="teachersgroup w-full flex gap-0  lg:gap-6 mt-9 flex-wrap lg:flex-nowrap">
          <Teachers Teacher={Teacher1}/>
          <Teachers Teacher={Teacher2}/>
          <Teachers Teacher={Teacher3}/>
          <Teachers Teacher={Teacher4}/>
        </div>
      </div>
    </div>
  );
};
