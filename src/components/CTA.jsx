import React from "react";
import Button from "./Button";
import styles from "../styles/style";

const { flexCenter, heading2, marginY, padding, paragraph } = styles;

function CTA() {
  return (
    <section className={`${flexCenter} ${marginY} ${padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={heading2}>Let’s try our service now!</h2>
        <p className={`${paragraph} mt-5 max-w-[470px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className={`${flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
}

export default CTA;
