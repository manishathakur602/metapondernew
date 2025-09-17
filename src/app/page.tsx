import Image from "next/image";
import HeroSection from "./components/HeroSection";
import SectionC from "./components/SectionC";
import SectionD from "./components/SectionD";
import SectionE from "./components/SectionE";
import Aboutone from "./components/Aboutone";
import Abouttwo from "./components/Abouttwo";
import Ums from "./components/Ums";
import Aboutus from "./components/Aboutus";
import Product from "./components/Product";

export default function Home() {
  return (
    <>
    {/* <div className="bg-gradient-to-r from-[#f0f4ff] via-[#fef6ff] to-[#fdfafa]"> */}
   
    <HeroSection />
    <Aboutus />
    
      <SectionC />
      <Product />
    {/* <Abouttwo />
    <SectionD />
    <SectionE />
    <Ums /> */}

   {/* </div> */}
    </>
  );
}
