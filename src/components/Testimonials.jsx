import React from "react";
import FeedbackCard from "./FeedbackCard";
import styles from "../styles/style";
import { feedback } from "../constant";

const { heading2, flexCenter, paddingY, paragraph } = styles;

function Testimonials() {
  return (
    <section className={`${paddingY} ${flexCenter} flex-col relative`} id="clients">
      <div className="absolute z-[0] w-[60%] h-[60%] rounded-full -right-[50%] blue__gradient" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={heading2}>
          What people are <br className="sm:block hidden" /> saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${paragraph} max-w-[450px] text-left`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>

      <div className="flex flex-wrap md:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map(({ id, ...card }) => (
          <FeedbackCard key={id} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
