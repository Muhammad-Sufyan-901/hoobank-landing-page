import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constant";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Navbar Logo" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map(({ id, title }, index) => (
          <li key={index} className={`${index === navLinks.length - 1 ? "mr-0" : "mr-10"} font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-secondary`}>
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img onClick={() => setOpenNav((prev) => !prev)} src={openNav ? close : menu} alt="Navbar Menu Icon" className="w-[28px] h-[28px] object-contain" />

        <div className={`${openNav ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map(({ id, title }, index) => (
              <li key={index} className={`${index === navLinks.length - 1 ? "mb-0" : "mb-4"} font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-secondary`}>
                <a href={`#${id}`}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
