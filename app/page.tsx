import React from "react";
import Navbar from "@/src/components/navbar";
import Hero from "./(home)/hero";
import Features from "./(home)/features";
import Aboutus from "./(home)/aboutus";
import Roadmap from "./(home)/roadmap";
import Faqs from "./(home)/faqs";
import Footer from "./(home)/footer";
import Tokenomics from "./(home)/tokenomics";

const page = () => {
  return (
    <>
      <div className="absolute left-0 right-0">
        <Navbar />
      </div>
      <Hero />
      <Features />
      <Aboutus />
      <Roadmap />
      <Tokenomics />
      <Faqs />
      <Footer />
    </>
  );
};

export default page;
