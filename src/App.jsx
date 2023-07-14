import React from "react";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Testimonials } from "./components";
import styles from "./styles/style";

const { boxWidth, flexCenter, flexStart, paddingX } = styles;

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${flexCenter} ${paddingX}`}>
        <div className={`${boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${flexStart}`}>
        <div className={`${boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
