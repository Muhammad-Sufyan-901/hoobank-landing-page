import React from "react";

function Button({ styles }) {
  return (
    <button className={`${styles} py-5 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]`} type="button">
      Get Started
    </button>
  );
}

export default Button;
