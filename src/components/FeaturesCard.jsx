import React from "react";
import styles from "../styles/style";

const { flexCenter } = styles;

function FeaturesCard({ icon, title, content, index, length }) {
  return (
    <div className={`${index !== length ? "mb-6" : "mb-0"} feature-card flex flex-row p-6 rounded-[20px]`}>
      <div className={`${flexCenter} w-[64px] h-[64px] rounded-full bg-dimBlue`}>
        <img src={icon} alt="Features Icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{content}</p>
      </div>
    </div>
  );
}

export default FeaturesCard;
