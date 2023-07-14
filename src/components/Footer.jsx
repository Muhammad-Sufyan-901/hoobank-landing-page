import React from "react";
import styles from "../styles/style";
import { footerLinks, socialMedia } from "../constant";
import { logo } from "../assets";

const { flexCenter, flexStart, paddingY, paragraph } = styles;

const socialMediaLength = socialMedia.length - 1;

function Footer() {
  return (
    <footer className={`${flexCenter} ${paddingY} flex-col`}>
      <div className={`${flexStart} md:flex-row flex-col w-full mb-8`}>
        <div className="flex-1 flex-col flex justify-start mr-10">
          <img src={logo} alt="Footer Logo" className="w-[266px] h-[72px] object-contain" />
          <p className={`${paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map(({ title, links }, index) => (
            <div key={index} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{title}</h4>

              <ul className="list-none mt-4">
                {links.map(({ name, link }, index) => (
                  <li key={index} className={`${index !== links.length - 1 ? "mb-6" : "mb-0"} font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                    <a href={link} target="_blank" rel="noopener norefferer">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite">Copyright &copy; 2021 HooBank. All Rights Reserved.</p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map(({ id, link, icon }, index) => (
            <a key={id} href={link} target="_blank" rel="noopener norefferer">
              <img src={icon} alt={`${id} Image`} className={`${index !== socialMediaLength ? "mr-6" : "mr-0"} w-[21px] h-[21px] object-contain cursor-pointer hover:invert-25`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
