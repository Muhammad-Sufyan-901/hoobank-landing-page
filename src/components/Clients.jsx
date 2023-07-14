import React from "react";
import styles from "../styles/style";
import { clients } from "../constant";

const { flexCenter } = styles;

function Clients() {
  return (
    <section className={`${flexCenter} my-4`}>
      <div className={`${flexCenter} flex flex-wrap w-full`}>
        {clients.map(({ id, logo }) => (
          <div key={id} className={`${flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
            <img src={logo} alt={`${id} Image`} className="sm:w-[192px] w-[100px] object-contain hover:invert-[.50]" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
