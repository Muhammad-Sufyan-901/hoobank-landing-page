import React from "react";
import styles from "../styles/style";
import { stats } from "../constant";

const { flexCenter } = styles;

function Stats() {
  return (
    <section className={`${flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map(({ id, title, value }) => (
        <div key={id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">{value}</h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{title}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;
