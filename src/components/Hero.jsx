import Section from "./Section";
import Button from "./button";
import Hero2 from "../assets/hero/Hero2.webp";
import heroBackground from "../assets/hero/hero-background.jpg";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";

import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import CompanyLogos from "./CompanyLogos";


const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative " ref={parallaxRef}>
        <div
          className="relative z-1 max-w-[62rem] mx-auto
             text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]"
        >
          <h1 className="h1 mb-6">
            Empowering Ideas through <br/>
            Code and Creativity.
           
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            {" "}
            Showcasing projects, skills, and design thinking through intelligent interfaces.
            Explore a portfolio where innovation meets simplicity.
          </p>
          <Button href="/Dashboard" white>
            {" "}
            Get Started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={Hero2}
                  alt="AI"
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                />
                <ScrollParallax isAbsolutelyPositioned>
                     <Generating className="absolute left-4 right-4 bottom-5 
                 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                </ScrollParallax>
               

              
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative  z-10 mt-20 lg:block"/>
      </div>
      <BottomLine/>
    </Section>
  );
};

export default Hero;
