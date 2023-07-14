import React from "react";
import Button from "./Button";
import FeaturesCard from "./FeaturesCard";
import styles, { layout } from "../styles/style";
import { features } from "../constant";

const { section, sectionImg, sectionInfo } = layout;
const { heading2, paragraph } = styles;

const featuresLength = features.length - 1;

function Business() {
  return (
    <section className={section} id="features">
      <div className={sectionInfo}>
        <h2 className={heading2}>
          You do the business, <br className="sm:block hidden" />
          we’ll handle the money.
        </h2>
        <p className={`${paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button styles="mt-10" />
      </div>

      <div className={`${sectionImg} flex-col`}>
        {features.map(({ id, ...feature }, index) => (
          <FeaturesCard key={id} index={index} length={featuresLength} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default Business;
