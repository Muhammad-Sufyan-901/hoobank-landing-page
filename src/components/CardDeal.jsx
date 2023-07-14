import React from "react";
import Button from "./Button";
import styles, { layout } from "../styles/style";
import { card } from "../assets";

const { section, sectionImg, sectionInfo } = layout;
const { heading2, paragraph } = styles;

function CardDeal() {
  return (
    <section className={section}>
      <div className={sectionInfo}>
        <h2 className={heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy steps.
        </h2>
        <p className={`${paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button styles="mt-10" />
      </div>
      <div className={sectionImg}>
        <img src={card} alt="Card Image" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
}

export default CardDeal;
