import React from "react";
import styles from "../styles/style";
import { arrowUp } from "../assets";

const { flexCenter, flexStart } = styles;

function GetStarted() {
  return (
    <div className={`${flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="Arrow Up Image" className="w-[23px] h-[23px] object-contain" />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
