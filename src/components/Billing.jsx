import React from "react";
import styles, { layout } from "../styles/style";
import { apple, bill, google } from "../assets";

const { sectionImgReverse, sectionInfo, sectionReverse } = layout;
const { heading2, paragraph } = styles;

function Billing() {
  return (
    <section className={sectionReverse} id="product">
      <div className={sectionImgReverse}>
        <img src={bill} alt="Billing Image" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={sectionInfo}>
        <h2 className={heading2}>
          Easily control your <br className="sm:block hidden" /> billing & invoicing.
        </h2>
        <p className={`${paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="App Store Image" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="Google Play Image" className="w-[128px] h-[42px] object-contain cursor-pointer" />
        </div>
      </div>
    </section>
  );
}

export default Billing;
