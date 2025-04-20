import React from "react";
import { words } from "../constants";
import Button from "../Components/Button";
import HeroExperience from "../Components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../Components/AnimatedCounter";

const Hero = () => {
  useGSAP(()=>{
    gsap.fromTo(".hero-text h1", {
      y:50,
      opacity:0
    },
    {
      y:0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power2.inOut"
  })
})
  return (
    <section id="hero" className="relative overflow-hidden mb-10">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* Left : Hero content */}
        <header className="flex flex-col justify-center md-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Building
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md-size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>for the Web that </h1>
              <h1>Works and Wows.</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
            I’m <strong>Shivani Nagda</strong>, a Full Stack Developer who crafts <br /> clean code, clever UI, and impactful user experiences <br />—one pixel and API at a time.</p>
              <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="see my work"/>
          </div>
        </header>
        {/* Right : 3D Model */}
        <figure>
          <div className="hero-3d-layout mt-20" >
          
            <HeroExperience />
            
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
